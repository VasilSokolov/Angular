'use strict';

var myApp = angular
    .module('myApplication', ['ngRoute', 'ngResource'])
    .config(function($routeProvider){
        $routeProvider
            .when('/pesho/:id:/genadi', {
                templateUrl: 'app/views/partials/pesho.html',
                controller: 'PeshoCtrl'
        })
            .when('/gosho', {
                templateUrl: 'app/views/partials/gosho.html'
            });
        $routeProvider.otherwise9({redirectTo: '/pesho'});
    })
    .constant('author', 'Vasil');