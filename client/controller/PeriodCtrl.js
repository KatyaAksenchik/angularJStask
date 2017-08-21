angular
    .module('app')
    .controller('PeriodCtrl', ['$scope','$stateParams', function ($scope, $stateParams) {
        $scope.sentPeriod=parseInt($stateParams.n);

    }])
    .directive('weekForecast', function() {
        return {
            restrict: 'AE',
            controller: 'weekForecastCtrl',
            templateUrl: 'templates/directive.html'
        };
    });



