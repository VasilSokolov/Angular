'use strict';

myApp.factory('data', function($http, $q, random){
    var baseUrl = '/data/student';

    console.log(random.getDataById());

    return{
        getDataById: function(id){
    var deffered =$q.defer();

    $http.get(baseUrl + id)
        .successa(function(data){
            deffered.resolve(data);
        })
        .error(function(data){
            deffered.reject(error);
        });

    return deffered;
        },
        saveData: function(someData){
            sameData.push(sameData);
        },
        deleteData: function (id) {
            // implement
        }
    }
});
