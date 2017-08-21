angular
    .module('app')
    .service('weatherService',function ($http) {
        var weatherApi="http://api.openweathermap.org/data/2.5",
            appID= "&APPID=ddd957af1ce6ac8e3d86468fa81058b3";

        this.getWeatherByCity = function (cityID) {
            var url = weatherApi+'/weather?id='+cityID+appID;
            return $http.get(url).then(function (res) {
                return res.data;
            })
        };
        
        this.getCities = function () {
            
        }

        this.getWeatherForecast = function (cityID) {
            var url = weatherApi+'/forecast/daily?id='+cityID+appID;
            return $http.get(url).then(function (res) {
                return res.data;
            })
        };


        this.getWeatherMonth  = function (cityID) {
            var url = weatherApi+'/forecast/daily?id='+cityID+"&cnt=16"+appID;
            return $http.get(url).then(function (res) {
                return res.data;
            })
        };

        this.getCitiesList = function () {
            return $http.get('/data/cities.json').then(function (res) {
                return res.data;
            })
        }

    });

// browser-sync start --server --directory --files "**/*"
// var url = weatherApi+'/history?id='+cityID+'&APPID=ddd957af1ce6ac8e3d86468fa81058b3';
