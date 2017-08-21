angular
    .module('app')
    .service('UserService', function () {
        // var user = {
        //     isLogged: false,
        //     username: ''
        // };

        this.getUser = function () {
            return JSON.parse(localStorage.getItem('loggedUser'));
        };

        this.setUser = function (logged, username) {
            var user = {
                isLogged: logged,
                username: username
            };
            localStorage.setItem('loggedUser',  JSON.stringify(user));
        };
    });