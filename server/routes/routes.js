module.exports = function (app, passport) {

    app.post('/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (user === false) {
                res.status(401).send(info);
            } else {
                res.status(200).send(info);
            }
        })(req, res, next);
    });


    app.post('/signup', function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (user === false) {
                res.status(401).send(info);
            } else {
                res.status(200).send(info);
            }

        })(req, res, next);
    });

    // app.get('/logout', function (req, res) {
    //     req.logout();
    //     // res.redirect('/');
    // });

};
