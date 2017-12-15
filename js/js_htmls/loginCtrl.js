app.controller('loginCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

	$scope.login = $cookies.get('Sesion');

	if($scope.login != null){
		window.location.href = "#!/"	
	}

	$scope.login = function(){
	$cookies.put('Usuario', $scope.usuario);
	$cookies.put('Password', $scope.password);
	var usuario = $cookies.get('Usuario');
	var password = $cookies.get('Password');

	if(usuario != null && password != null){
		$scope.session = true;
		$cookies.put('Sesion', $scope.session);
		$scope.inicio = $cookies.get('Sesion');
		$scope.mostrar.sideBar = true;
	} 	
	window.location.href = "#!/"
	}

}]);