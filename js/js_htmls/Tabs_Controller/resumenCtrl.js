app.controller('resumenCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {

$scope.prueba= {nombre: null}
$scope.nombre= {completo: null}
$scope.nombre= {cargo: null}
$scope.area= {descripcion: null}
$scope.area= {id: null}

// Inicialización de catálogos
$scope.listado_Abogado=[
{id:"1",tipo: "Abogado 1"},
{id:"2",tipo: "Abogado 2"},
{id:"3",tipo: "Abogado 3"},
{id:"4",tipo: "Abogado 4"},
{id:"5",tipo: "Abogado 5"}
]; 

$scope.listado_Area=[
{id:"1",tipo: "Area 1"},
{id:"2",tipo: "Area 2"},
{id:"3",tipo: "Area 3"},
{id:"4",tipo: "Area 4"},
{id:"5",tipo: "Area 5"}
]; 

$scope.activarDiv = function(){
		if($scope.nombre.completo  != null && $scope.nombre.cargo != null && $scope.area.id != null){
		$scope.responsable = true;
		}
		if($scope.nombre.completo  == "" || $scope.nombre.cargo == "" || $scope.area.id == null){
		$scope.responsable = false;
		}
	}

}]);