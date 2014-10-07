'use strict';

var myApp = angular
    .module('myApplication', ['ngRoute', 'ngSanitize', 'ngResource'])
    .constant('author', 'Vasil');