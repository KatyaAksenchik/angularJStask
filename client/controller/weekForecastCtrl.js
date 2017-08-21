angular
    .module('app')
    .controller('weekForecastCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {

        $scope.$watch("selectedItem.idcity", function () {
            weatherService.getWeatherForecast($scope.selectedItem.idcity).then(function (res) {
                $scope.choosedCity = res;
            });
        })


    }]);