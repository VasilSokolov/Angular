'use strict';

myApp.controller('FooterCtrl',
    function FooterCtrl($scope, $http, author){
        $scope.footer = 'Copyright TA 2014' + author;
    });