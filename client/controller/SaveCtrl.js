angular
    .module('app')
    .controller('SaveCtrl', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {
        initDatePiker();

        $http.get("/api/cities").then(function (res) {
            $scope.listedcities = res.data;
        });

        $scope.addWeather = function () {
            Upload.upload({
                url: 'upload',
                data: {file: $scope.weather.imageUrl}
            }).then(function (res) {
                $scope.weather.imageUrl = $scope.weather.imageUrl.name.toLowerCase();
                $http.post("/api/info", $scope.weather)
                    .then(function (data, status) {
                        $scope.weather = {};
                    });
            }, function (res) {
                console.log('Error status: ' + res.status);
            });

        };
    }])
    .directive('fileModal', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var modal = $parse(attrs.fileModal);
                var modalSetter = modal.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modalSetter(scope, element[0].files[0]);
                    })
                })
            }
        }
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