define([
    'angularMock',
    'app/main/controllers/MainController'
], function () {
    'use strict';

    describe('MainController', function () {
        beforeEach(module('main'));

        var $scope,
            $controller,
            $rootScope,
            MainController;


        beforeEach(inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;

            MainController = $controller('MainController', {
                    '$scope': $scope
                });
        }));

        afterEach(function () {
        });

        describe('init', function () {
            it('should have greeting', function(){
                expect($scope.greeting).toBe('Hello World');
            });
        });



    });

});

