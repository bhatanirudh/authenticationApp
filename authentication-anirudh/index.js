// initialise express js
require('dotenv').config();
const express = require('express');
const env=require('./config/environment');
const app = express();
const port = 8000;

// below are the libraries required
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

const db = require('./config/mongoose'); //setting mongoose from config
const passportLocal = require('./config/passport-local-strategy'); //for local passport strategy
const passportgoogle = require('./config/passport-google-oauth2-strategy');// google passport
const flash_middleware=require('./config/flash-midlleware');// midlleware for flash
const path=require('path');

// setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// below are middlewares
app.use(express.static(env.asset_path)); // Do not forget this else assets wont load automatically with ejs files
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(session({ 
    cookie: { maxAge: 50000 },
    secret: env.session_cookie_key,
    resave: false, 
    saveUninitialized: false,
    store: MongoStore.create({
            mongoUrl: 'mongodb://localhost/authentication-session',
            autoRemove: 'disabled'},
        function(err){console.log(err || ' connect-mongodb setup ok');}
    )

}));
app.use(flash());
app.use(flash_middleware.setFlash);
app.use(passport.initialize());

app.use('/', require('./routes/index')); // all routes from this directory 

// App is listening on port
app.listen(port, function(err){
    if(err){
        console.log(`Error in listening to server on port ${port}`);
    }
    console.log(`server is running on port: ${port}`);
});