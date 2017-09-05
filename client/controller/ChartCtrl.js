angular
    .module('app')
    .controller('ChartCtrl', ['$scope', '$http', 'weatherService', function ($scope, $http, weatherService) {

    }])
    .directive('weatherChart', function ($window) {
        return {
            restrict: 'EA',
            template: "<div id='chart'></div>",
            controller: "GraphCtrl"
        }
    });
