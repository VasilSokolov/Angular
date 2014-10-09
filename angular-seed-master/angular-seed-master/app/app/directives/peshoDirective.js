'use strict';

myApp.directive('peshoInformation', function (){
    return{
        restrict: 'A',
        template: 'app/views/directives/pesho-directives.html',
        scope: {
            search: '='
        },
        replace: true
    }
});
