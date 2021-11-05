require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var method = require('method-override');
const session = require('express-session');
const localUser = require('./middleware/localUser');


//middlewares
const recordame = require('./Middleware/cookie');
const loginCheck = require('./Middleware/loginCheck');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var comunityRouter = require('./routes/comunity');
var adminRouter = require('./routes/admin');

var app = express();

//method-override

app.use(method("_method"))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(session({
  secret : 'mi secreto',
  saveUninitialized : true,
  resave : false,
}));


//app para recordame usuario
app.use(recordame);

//
app.use(localUser);
//
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/comunity', comunityRouter);
app.use('/admin', adminRouter);
app.use('/apis',require('./routes/apis'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
/*  */