app.controller('homeCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.usuarioCookie = $cookies.get('Usuario');

$scope.logout = function(){
	$cookies.remove('Usuario');
	$cookies.remove('Password');
	var pruebra= 
	window.location.href = "#!/login"
	}


}]);