const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('dotenv').config();
const User = require('./models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const indexRouter = require('./routes/index');
const cadastroRouter = require('./routes/cadastro');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const userRouter = require('./routes/user');

const app = express();

// Express configs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// Passport
app.use(passport.initialize());

// JWT Strategy

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_KEY;

passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {

  User.findOne({where: {id: jwt_payload.id}})
  .then ( function(user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
  .catch(function(err){
    console.log(err)
    res.redirect('/login')
  });

}));


// Routes
app.use('/', indexRouter);
app.use('/cadastro', cadastroRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/user', userRouter);


// Error handling
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(err.statusCode).json({
      status : err.statusCode,
      mensagem : "Erro na sintaxe do JSON"
    });
  }
    next();
});

app.use(function (err, req, res, next) {
  if (err.statusCode === 401) { 
    res.status(401).json({
      status : 401,
      mensagem : "Não autorizado"
    });
  }
  next();
});

app.use((req, res) => {
  res.status(404).json({
    status : 404,
    mensagem : "Página não encontrada"
  })
});

// Listen to port 3000
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
