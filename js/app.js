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

