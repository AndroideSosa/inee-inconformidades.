app.controller('sideBarCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.mostrar = {test: null}; 
$scope.mostrar.test = $cookies.get('Usuario');
console.log($scope.mostrar.test)

$scope.logout = function(){
	$cookies.remove('Sesion');
	$cookies.remove('Usuario');
	$scope.mostrar.sideBar = false;
	window.location.href = "#!/login"
	}



}]);