app.controller('leyCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.expediente = false;

// $scope.cambiarTrue = function(){
// 		$scope.expediente = true;
// 	}


$scope.cambiarFalse= function(){
		$scope.expediente = true;
	}


$scope.cambiarTrue= function(){
		$scope.botonesLeyes = true;
	}

// $scope.cambiarFalseA= function(){
// 		$scope.botonesLeyes = true;
// 	}


}]);