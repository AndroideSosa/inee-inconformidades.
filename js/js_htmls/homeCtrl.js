app.controller('homeCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.usuarioCookie = $cookies.get('Sesion');

if($scope.usuarioCookie == null){
	window.location.href = "#!/login"	
}if($scope.usuarioCookie != null){
	$scope.mostrar.sideBar = true;	
}

$scope.logout = function(){
	$cookies.remove('Usuario');
	$cookies.remove('Password');
	$cookies.remove('Sesion');
	window.location.href = "#!/login"
	}

	$scope.link = function(){
	window.location.href = "#!/nueva_inconformidad"	
	}


}]);