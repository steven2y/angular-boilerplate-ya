define([
    'angular',
    'app/boot'
], function (angular) {
    return angular.module('main')
        .controller('MainController', function ($scope) {
            $scope.greeting = 'Hello World';
        });
});