app.controller('loginCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

	$scope.login = function(){
	$cookies.put('Usuario', $scope.usuario);
	$cookies.put('Password', $scope.password);
	window.location.href = "#!/"
	}

}]);