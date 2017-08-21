angular
    .module('app')
    .controller('SaveCtrl', ['$scope', '$http', function ($scope, $http) {
        initDatePiker();

        $http.get("/api/cities").then(function (res) {
            $scope.listedcities = res.data;
        });

        $scope.addWeather = function () {
            console.log($scope.weather);
            $http.post("/api/info", $scope.weather)
                .then(function (data, status) {
                    $scope.weather = {};
                });
        };


    }]);


function initDatePiker() {
    var date_input = $('input[name="date"]');
    var container = $('form').length > 0 ? $('form').parent() : "body";
    var options = {
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true
    };
    date_input.datepicker(options);

}