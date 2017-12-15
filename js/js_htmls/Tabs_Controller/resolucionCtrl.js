app.controller('resolucionCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.botonResolucion = true;
$scope.botonNotificacion = true;

$scope.tipo_Sanciones=[
{id:"1",tipo: "Sansión 1"},
{id:"2",tipo: "Sansión 2"},
{id:"3",tipo: "Sansión 3"},
{id:"4",tipo: "Sansión 4"},
{id:"5",tipo: "Sansión 5"}
]; 

$scope.tipo_Autoridades=[
{id:"1",tipo: "Autoridad 1"},
{id:"2",tipo: "Autoridad 2"},
{id:"3",tipo: "Autoridad 3"},
{id:"4",tipo: "Autoridad 4"},
{id:"5",tipo: "Autoridad 5"}
]; 


$scope.resolucionClick = function(){
	$scope.resolucionClick = false;	
	$scope.notificacionResolucion = true;
	$scope.botonResolucion = false;
	}

$scope.servidorTrue = function(){
	$scope.fechaAudiencia = true;	
	$scope.horaAudiencia = false;
	}
$scope.servidorFalse = function(){
	$scope.fechaAudiencia = false;	
	$scope.horaAudiencia = true;	
	}
$scope.oficioClick = function(){
	$scope.botonNotificacion = false;	
	$scope.horaAudiencia = true;	
	$scope.oficioResolucion = true;	
	$scope.botonEjecucion = true;	
	}
$scope.ejecucionClick = function(){
	$scope.botonEjecucion = false;	
	$scope.cumplimiento = true;	
	$scope.botonCredito = true;	
		
	}


}]);