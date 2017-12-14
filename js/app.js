// Controlador maestro

// Inyectar Dependencias
var app = angular.module( 'INEE', [
	'ngRoute', 
	'ngCookies',
    'angularjs-datetime-picker',
	]);

app.controller('mainCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {


	$scope.mostrar = {sideBar: false};

	$scope.usuarioSesion = $cookies.get('Sesion');
	console.log($scope.usuarioSesion)

	$scope.sidebar = 'templates/sidebar.html';
	$scope.tab_resumen = 'templates/Tabs_Templates/resumen.html';
	$scope.tab_expediente = 'templates/Tabs_Templates/expediente.html';
	$scope.tab_audiencia = 'templates/Tabs_Templates/audiencia.html';
	$scope.tab_pruebas = 'templates/Tabs_Templates/pruebas.html';
	$scope.tab_resolucion = 'templates/Tabs_Templates/resolucion.html';
	$scope.tab_impugnaciones = 'templates/Tabs_Templates/impugnaciones.html';

	if($scope.usuarioSesion != null){
		$scope.mostrar.sideBar = true;
		window.location.href = "#!/"
	}if($scope.usuarioSesion == null){
		$scope.mostrar.sideBar = false;
	}
	

$scope.logout = function(){
	$cookies.remove('Sesion');
	$scope.mostrar.sideBar = false;
	window.location.href = "#!/login"
	}

}]);

