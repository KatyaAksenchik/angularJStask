angular
    .module('app')
    .controller('AdminCtrl', ['$scope', '$http', 'weatherService', function ($scope, $http, weatherService) {
        $scope.currentCity = {};

        $scope.getItems = function () {
            $http.get('/api/cities').then(function (res) {
                $scope.citiesDB = res.data;
            });
        };

        $scope.getItems();

        $scope.opemEditForm = function (city) {
            $scope.currentCity = city;
            $('#EditCityModal').modal('show');
        };

        $scope.updateForm = function (city) {
            console.log(city);
        };

        $scope.deleteItem = function (city) {
            $http.delete('/api/cities/' + city.idcity).then(function (res) {
                console.log(res);
                if (res.data === true) {
                    $scope.getItems();
                }
            });
        };

        $scope.saveItem = function (city) {
            $http.post('/api/cities/', city).then(function (res) {
                $scope.getItems();
                $scope.newCity = {};
            });
        };

        $scope.updateItem = function (city) {
            $http.put('/api/cities/' + city.idcity, city).then(function (res) {
                $scope.getItems();
                $('#EditCityModal').modal('hide');
            });
        }

    }]);