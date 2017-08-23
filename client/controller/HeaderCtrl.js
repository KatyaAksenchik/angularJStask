angular
    .module('app')
    .controller('HeaderCtrl', ['$scope', 'UserService', '$state', function ($scope, UserService, $state) {
        $scope.$watch(function () {
            return UserService.getUser();
        }, function (user) {
            $scope.logged = user.isLogged;
            $scope.authUser = user.username;
        }, true);

        $scope.logout = function () {
            UserService.setUser(false, "");
            $state.go("main.home.basic");
        }
    }]);