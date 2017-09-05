var express = require('express');
var router = express.Router();
var connection = require("../config/db");

// console.log(upload);

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

router.post('/cities', function (req, res, next) {
    var data = req.body;
    var query = connection.query('insert into cities set?', data, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    })
});


router.put('/cities/:id', function (req, res, next) {
    var data = req.body;
    var query = connection.query('update cities set ? where idcity = ?', [data, req.params.id], function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send('Ok');
        }
    })
});

router.delete('/cities/:id', function (req, res) {
    var query = connection.query('delete from cities where idcity = ?', req.params.id, function (err, result) {
        if (err) {
            console.error(err);
            return res.send(err);
        } else {
            return res.send(true);
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