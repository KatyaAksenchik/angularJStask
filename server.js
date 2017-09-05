var express = require('express');
var session = require('express-session');
var morgan = require('morgan');
var multer = require('multer');

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

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './server/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname.toLowerCase());
    }
});


var upload = multer({storage: storage}).single('file');

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(__dirname + '/client'));
app.use('/api', api);

require('./server/routes/routes.js')(app, passport);
require('./server/routes/file.js')(app, upload);

//----------------------------------------------------

app.listen(port);
console.log('Listen on port ' + port);
