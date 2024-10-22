(function () {
    'use strict';

    angular.module('RestaurantApp', ['ui.router'])
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('signup', {
                url: '/signup',
                template: '<signup></signup>'
            })
            .state('myinfo', {
                url: '/myinfo',
                template: '<myinfo></myinfo>'
            });
    }
})();
