app.controller('pruebasCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.fecha= {desahogo: null}
$scope.nombre= {desahogo: null}
$scope.observaciones= {desahogo: null}
$scope.nombre= {instruccion: null}

$scope.activarDivPresentadas = function(){
	$scope.pruebasPresentadas = true;
	$scope.bandera1 = true;	
	$scope.botonPresentadas = true;
	}
$scope.activarDivPresentadasFalse = function(){
	$scope.pruebasPresentadas = false;	
	$scope.bandera1 = false;	
	$scope.botonPresentadas = true;
	}
$scope.ocultarBoton = function(){
	$scope.botonPresentadas= false;	
	$scope.estatusPrueba = true;
	$scope.disabled= true;
	$scope.estatusPruebaBoton= true;
	}
$scope.ocultarBoton2 = function(){
	$scope.estatusPruebaBoton= false;
	$scope.cierreInstruccion= true;
	$scope.estatusPruebaBoton2= true;
	}
$scope.ocultarBoton3 = function(){
	$scope.estatusPruebaBoton2= false;
	$scope.ampliacionTermino= true;
	$scope.estatusPruebaBoton3= true;
	}
	$scope.alert = function(){
	sweetAlert("Éxito", "Registro guardado exitosamente en el sistema.", "success");
	}
	$scope.activarDivSegundo = function(){
	$scope.pruebasPresentadas2 = true;	
	$scope.bandera1 = false;
	$scope.bandera2 = true;	
	}
	$scope.activarDivTercero = function(){
	$scope.pruebasPresentadas3 = true;	
	$scope.bandera3 = true;
	$scope.bandera2 = false;	
	}
	$scope.activarDivCuarto = function(){
	$scope.pruebasPresentadas4 = true;	
	$scope.bandera4 = true;
	$scope.bandera3 = false;	
	}



}]);