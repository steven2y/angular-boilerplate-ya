define([
    'angular'
], function (angular) {

    angular.module('main', []);

    angular.module('myApp', [
        'main',
        'ngRoute'
    ]);
});