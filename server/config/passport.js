var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var connection = require('../config/db');


module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });


    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ", [id], function (err, rows) {
            done(err, rows[0]);
        });
    });

    passport.use(
        'local-signup',
        new LocalStrategy({
                usernameField: 'username',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, username, password, done) {
                connection.query("SELECT * FROM users WHERE username = ?", [username], function (err, rows) {
                    if (err)
                        return done(err);
                    if (rows.length) {
                        return done(null, false, 'That username is already taken.');
                    } else {
                        var newUser = {
                            username: username,
                            password: bcrypt.hashSync(password, null, null)
                        };

                        var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";
                        connection.query(insertQuery, [newUser.username, newUser.password], function (err, rows) {
                            newUser.id = rows.insertId;
                            return done(null, true, {user: newUser, info: "User was added to database"});
                        });
                    }
                });
            })
    );

    passport.use(
        'local-login',
        new LocalStrategy({
                usernameField: 'username',
                passwordField: 'password',
                passReqToCallback: true
            },
            function (req, username, password, done) {
                connection.query("SELECT * FROM users WHERE username = ?", [username], function (err, rows) {
                    if (err)
                        return done(err);
                    if (!rows.length) {
                        return done(null, false, 'No user found');
                    }

                    if (!bcrypt.compareSync(password, rows[0].password))
                        return done(null, false, 'Wrong password.');

                    return done(null, true, rows[0]);
                });
            })
    );
};
