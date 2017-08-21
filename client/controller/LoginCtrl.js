angular
    .module('app')
    .controller('LoginCtrl', ['$scope', '$http', '$state', 'UserService', function ($scope, $http, $state, UserService) {
        $scope.loginUser = function () {
            $http.post("/login", $scope.user).then(function (res) {
                if (res.status === 200) {
                    $state.go("main.home.basic");

                    UserService.setUser(true, res.data.username);
                }
            }, function errorCallback(res) {
                if (res.status === 401) {
                    $scope.message = res.data;
                    UserService.setUser(false, "");
                }
            }).then(function () {
                $scope.user = {};
            })
        }
    }]);