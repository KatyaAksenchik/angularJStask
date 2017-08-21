angular
    .module('app')
    .controller('SignupCtrl', ['$scope', '$http', '$state', 'UserService', function ($scope, $http, $state, UserService) {
        $scope.signupUser = function () {
            $http.post("/signup", $scope.signUser).then(function (res) {
                if (res.status === 200) {
                    $state.go("main.home.basic");
                    UserService.setUser(true, res.data.user.username);
                }
            }, function errorCallback(res) {
                if (res.status === 401) {
                    UserService.setUser(false, "");
                    $scope.messageSign = res.data;
                }
            }).then(function () {
                $scope.signUser = {};
            })
        }
    }]);
