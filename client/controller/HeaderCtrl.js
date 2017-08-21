angular
    .module('app')
    .controller('HeaderCtrl', ['$scope', 'UserService', function ($scope, UserService) {
        $scope.$watch(function () {
            return UserService.getUser();
        }, function (user) {
            $scope.logged = user.isLogged;
            $scope.authUser = user.username;
        }, true);

        $scope.logout = function () {
            UserService.setUser(false, "");
        }
    }]);