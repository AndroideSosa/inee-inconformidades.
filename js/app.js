// Controlador maestro

// Inyectar Dependencias
var app = angular.module( 'INEE', [
	'ngRoute', 
	'ngCookies',
    'angularjs-datetime-picker',
	]);

app.controller('mainCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {


}]);

