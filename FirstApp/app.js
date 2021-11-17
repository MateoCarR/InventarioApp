/*global angular */
/*global console*/
/* eslint no-console: "off" */
/* eslint no-unused-vars: "off" */

//Module
var appInventario = angular.module('appInventario', ['ngRoute']);
//Routes
appInventario.config(function ($routeProvider){
    $routeProvider
    
    .when('/',{
        templateUrl:'paginas/Inventario.html',
        controller:'mainController'
    })
    .when('/Insertar',{
        templateUrl:'paginas/formInsertar.html',
        controller:'insController'
    })
    .when('/Modificar',{
        templateUrl:'paginas/formModificar.html',
        controller:'modController'
    })
    .when('/Eliminar',{
        templateUrl:'paginas/formEliminar.html',
        controller:'eliController'
    })
})
//Controllers
appInventario.controller('mainController',['$scope',function($scope){
    
}])
appInventario.controller('insController',['$scope',function($scope){
    
}])
appInventario.controller('modController',['$scope',function($scope){
    
}])
appInventario.controller('eliController',['$scope',function($scope){
    
}])