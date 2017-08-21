var express = require('express');
var router = express.Router();
var connection = require("../config/db");

router.get('/cities', function (req, res) {
    var query = connection.query('select * from cities', function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send(result);
        }
    })
});

router.post('/info', function (req, res, next) {
    var data = req.body;
    var query = connection.query('insert into info set?', data, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    })
});


router.get('/info', function (req, res, next) {
    var query = connection.query('select * from info', function (err, result) {
        if (err) {
            return res.send(err);
        } else {
            return res.send(result);
        }
    })
});

module.exports = router;