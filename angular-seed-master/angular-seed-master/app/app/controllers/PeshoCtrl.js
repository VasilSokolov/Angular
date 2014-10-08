'use strict';

myApp.controller('PeshoCtrl', function PeshoCtrl($scope, $routeParams){
    $scope.pesho = 'Pesho!';
    console.log($routeParams.id);
    console.log($routeParams.genadi);

});
