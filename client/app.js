angular
    .module('app', ['ui.router', 'app.filters'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/home/basic");
        $urlRouterProvider.when("/", "/home/basic");
        $urlRouterProvider.otherwise('/home/basic');

        $stateProvider
            .state('main', {
                url: "/",
                views: {
                    '': {
                        templateUrl: "./templates/main.html"
                    },
                    'header@main': {
                        templateUrl: "./templates/header.html",
                        controller: 'HeaderCtrl'
                    },
                    'nav@main': {
                        templateUrl: "./templates/nav.html"
                    },
                    'content@main': {
                        templateUrl: "./templates/content.html"
                    },
                    'footer@main': {
                        templateUrl: "./templates/footer.html"
                    }
                }
            })
            .state('main.home', {
                abstract: true,
                url: 'home',

                views: {
                    'content@main': {
                        templateUrl: "./templates/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })
            .state('main.home.basic', {
                url: '/basic',
                templateUrl: "./templates/basic.html"
            })
            .state('main.home.forecast', {
                abstract: true,
                url: '/forecast',
                templateUrl: "./templates/forecast.html"
            })
            .state('main.home.forecast.period', {
                url: '/period/:n',
                templateUrl: './templates/period.html',
                controller: "PeriodCtrl"
            })
            .state('main.home.charts', {
                url: '/charts',
                templateUrl: "./templates/chart.html",
                controller: "ChartCtrl"
            })
            .state('main.save', {
                url: 'save',
                views: {
                    'content@main': {
                        templateUrl: './templates/save.html',
                        controller: "SaveCtrl"
                    }
                }
            })
            .state('main.login', {
                url: 'login',
                views: {
                    'content@main': {
                        templateUrl: './templates/login.html',
                        controller: "LoginCtrl"
                    }
                }
            })
            .state('main.signup',{
                url: 'signup',
                views: {
                    'content@main': {
                        templateUrl: './templates/signup.html',
                        controller: "SignupCtrl"
                    }
                }
            })


    });