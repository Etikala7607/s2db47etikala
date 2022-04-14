var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

const connectionString =  process.env.MONGO_CON;
console.log(connectionString);
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var devRouter = require('./routes/devil');
var addmodRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Devil = require("./models/devil"); 
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/selector',selectorRouter);  
app.use('/addmods',addmodRouter);
app.use('/devil',devRouter);
app.use('/resource',resourceRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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



// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await Devil.deleteMany(); 
 
  let instance1 = new Devil({name:"ghost",  version:"2323.1", type:"Angry"}); 
  let instance2 = new Devil({name:"JAI",  version:"32.1", type:"Humilor"});
  let instance3 = new Devil({name:"poi",  version:"672.1", type:"Romantic"});

  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("Second object saved") 
});
instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("Third object saved") 
});
} 
let reseed = true;
if(reseed){recreateDB()};
module.exports = app;