angular
    .module('app')
    .controller('HomeCtrl', ['$scope', '$http', 'weatherService', function ($scope, $http, weatherService) {
        $scope.currentWeather = {};

        $http.get('/api/cities').then(function (res) {
            $scope.cities = res.data;
            $scope.selectedItem = $scope.cities[0];
            return $scope.selectedItem;
        }).then(function (res) {
            weatherService.getWeatherByCity($scope.selectedItem.idcity).then(function (res) {
                $scope.currentWeather = res;
            });
        });

        $scope.getData = function (city) {
            weatherService.getWeatherByCity(city.idcity).then(function (data) {
                $scope.currentWeather = data;
            });
        }

    }]);


