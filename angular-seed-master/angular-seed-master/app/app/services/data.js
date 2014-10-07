'use strict';

myApp.factory('data', function($http){

    var baseUrl = '/data/student';
    return{
        getDataById: function(id, callback){
            $http.get(baseUrl + id).success(callback);
        },
        saveData: function(someData){
            sameData.push(sameData);
        },
        deleteData: function (id) {
            // implement
        }
    }
});
