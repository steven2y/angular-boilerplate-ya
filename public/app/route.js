
define([
    'angular',
    'app/boot',
    'app/main/controllers/MainController',
], function(angular) {
    'use strict';
    return angular.module('myApp').config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'app/main/views/main.html'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
});