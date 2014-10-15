'use strict';

carsApp.controller('PageController',
    function PageController($scope, mark){
    $scope.mark = mark;
    $scope.date = {
        year: 2014,
        month: 1,
        day: 10
    }
});
