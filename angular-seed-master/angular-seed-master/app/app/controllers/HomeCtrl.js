'use strict';

myApp.controller('HomeCtrl',
    function HomeCtrl($scope, data){
        data.getDataById(5, function(user){
            $scope.currentUserName = user.name;
        });

        $scope.register = function(user, regForm){
            if (regForm.$valid) {
                console.log(user);
                data.saveData(user);
            }
            if (regForm.$invalid) {
                console.log("not valid form");
            }
        }
});
