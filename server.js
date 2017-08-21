var express = require('express');
var session = require('express-session');
var morgan = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./server/routes/api');

var passport = require('passport');
var flash = require('connect-flash');

var port = 3000;
var app = express();

//----------------------------------------------------

require('./server/config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
    secret: 'secretsession',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(__dirname + '/client'));
app.use('/api', api);

require('./server/routes/routes.js')(app, passport);


//----------------------------------------------------

app.listen(port);
console.log('Listen on port ' + port);
