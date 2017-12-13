app.controller('inconformidadCtrl', ['$scope','$http','$cookies',function ($scope, $http,$cookies) {
$scope.usuarioCookieI = $cookies.get('Usuario');
//Inicialización de variables para controlar los Divs
$scope.mostrarDivAbogados = false;
$scope.mostrarDivBoton = false;
$scope.divMostrarBoton = false;
$scope.divMostrarAcuerdo = false;
$scope.divMostrarNotificacion = false;
$scope.mostrarDivObservaciones = false;
$scope.ocultarDivObservaciones = false;
$scope.ocultarDivNotificacion = false;
$scope.mostrarObservacionesCitatorio = false;
$scope.divOcultarMotivo = false;
$scope.ocultarDivInconforme = false;
$scope.deshabilitarRadio = false;
$scope.ocultarDivBoton = false;
$scope.ocultarProcedencia = false;
$scope.mostrarInconforme = false;
$scope.mostrarDivInconforme = false;
$scope.mostrarDivProcedencia = false;
$scope.mostrarAcuerdoImprocedencia=false;
$scope.mostrarRespuesta = false;
$scope.elegido= {id: null}
$scope.etapa= {id: null}
$scope.area= {id: null}
$scope.abogado= {id: null}
$scope.abogado= {id: null}
$scope.modo= {id: null}
$scope.respuesta= {seleccionada: null}
$scope.presenta= {seleccionada: null}
$scope.procedimiento= {seleccionada: null}
$scope.servicio= {seleccionada: null}
$scope.observaciones= {seleccionada: null}
$scope.oficio= {seleccionada: null}
$scope.acuerdo= {seleccionada: null}
$scope.motivo= {seleccionada: null}
$scope.hora= {seleccionada: null}
$scope.cita= {seleccionada: null}
$scope.fecha= {seleccionada: null}
$scope.observacionesCitatorio= {seleccionada: null}

// Inicialización de catálogos
$scope.tipo_Eventos=[
{id:"1",tipo: "Tipo de Evento 1"},
{id:"2",tipo: "Tipo de Evento 2"},
{id:"3",tipo: "Tipo de Evento 3"},
{id:"4",tipo: "Tipo de Evento 4"},
{id:"5",tipo: "Tipo de Evento 5"}
]; 

$scope.tipo_Etapas=[
{id:"1",tipo: "Etapa 1"},
{id:"2",tipo: "Etapa 2"},
{id:"3",tipo: "Etapa 3"},
{id:"4",tipo: "Etapa 4"},
{id:"5",tipo: "Etapa 5"}
]; 

$scope.tipo_Areas=[
{id:"1",tipo: "Área 1"},
{id:"2",tipo: "Área 2"},
{id:"3",tipo: "Área 3"},
{id:"4",tipo: "Área 4"},
{id:"5",tipo: "Área 5"}
]; 

$scope.tipo_Abogados=[
{id:"1",tipo: "Abogado responsable 1"},
{id:"2",tipo: "Abogado responsable 2"},
{id:"3",tipo: "Abogado responsable 3"},
{id:"4",tipo: "Abogado responsable 4"},
{id:"5",tipo: "Abogado responsable 5"}
]; 

$scope.tipo_Respuesta=[
{id:"1",tipo: "Contesta"},
{id:"2",tipo: "Contesta parcialmente"},
{id:"3",tipo: "No contesta"}
]; 

$scope.tipo_Modo=[
{id:"1",tipo: "Recurso de revisión"},
{id:"2",tipo: "Juicio de nulidad"}
]; 


//Declaración de funciones

$scope.logout = function(){
	$cookies.remove('Usuario');
	$cookies.remove('Password');
	var pruebra= 
	window.location.href = "#!/login"
	}

$scope.activarDiv = function(){
	
	if($scope.fecha.seleccionada != null && $scope.presenta.seleccionada !=null && $scope.elegido.id !=null && $scope.procedimiento.seleccionada !=null && $scope.etapa.id !=null && $scope.servicio.seleccionada != null &&  $scope.area.id != null){
		$scope.mostrarDivProcedencia = true;
	}

	if($scope.fecha.seleccionada == null || $scope.presenta.seleccionada ==null || $scope.elegido.id ==null || $scope.procedimiento.seleccionada ==null || $scope.etapa.id ==null || $scope.servicio.seleccionada == null ||  $scope.area.id == null){
		swal({
						title: 'Alerta',
						text: "Para continuar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
	}	

	}

$scope.cambiarEstado = function(){
		if($scope.revision != false){
			$scope.mostrarAcuerdoImprocedencia=false;
			$scope.mostrarDivAbogados = true;
			$scope.mostrarDivObservaciones = true;
			$scope.mostrarInconforme = true;
			$scope.mostrarDivInconforme = true;
			$scope.mostrarDivBoton = true;
			$scope.divMostrarBoton = false;
			$scope.divMostrarAcuerdo = false;
		}
	}

$scope.cambiarEstadoFalse = function(){
		if($scope.revision != true){
			$scope.revisionInconforme = null;
			$scope.mostrarDivAbogados = false;
			$scope.mostrarInconforme = false;
			$scope.mostrarRespuesta = false;
			$scope.mostrarDivObservaciones = true;
			$scope.mostrarAcuerdoImprocedencia=true;
			$scope.divMostrarAcuerdo = true;
			$scope.mostrarDivBoton = false;
			
		}
	}

$scope.confirmarDiv = function(){
		if($scope.fecha.seleccionada != null && $scope.presenta.seleccionada !=null && $scope.elegido.id !=null && $scope.procedimiento.seleccionada !=null && $scope.etapa.id !=null && $scope.servicio.seleccionada != null &&  $scope.area.id != null){
		$scope.mostrarDivProcedencia = true;
		$scope.ocultarDivBoton = true;
	}if($scope.presenta.seleccionada == "" || $scope.procedimiento.seleccionada =="" || $scope.servicio.seleccionada ==""){
		$scope.mostrarDivProcedencia = false;
	}
	}

$scope.cambiarEstadoInconforme = function(){
		if($scope.revisionInconforme != false){
			$scope.mostrarRespuesta = true;
			$scope.divMostrarBoton = true;
		}
	}

$scope.cambiarEstadoImprocedencia = function(){
		if($scope.notificacionImprocedencia != false){
			$scope.mostrarCita=true;
			$scope.divMostrarNotificacion = true;
		}
	}

$scope.cambiarEstadoImprocedenciaFalse = function(){
		if($scope.notificacionImprocedencia != true){
			$scope.mostrarObservacionesCitatorio=true;
			$scope.mostrarCita=true;
			$scope.divMostrarNotificacion = true;
		}
	}

$scope.activarDivProcedencia = function(){
		if($scope.abogado.id == null || $scope.observaciones.seleccionada == null){

			swal({
						title: 'Alerta',
						text: "Para almacenar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
		}
	
		if($scope.abogado.id != null || $scope.observaciones.seleccionada != null){

			$scope.mostrarDivBoton = false;
			$scope.deshabilitarRadio = true;
			$scope.ocultarDivObservaciones = true;
		}

	}

$scope.activarDivPrevencion = function(){

	if($scope.respuesta.id == null || $scope.oficio.seleccionada == null || $scope.oficio.seleccionada == ""){

			swal({
						title: 'Alerta',
						text: "Para almacenar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
		}

	if($scope.respuesta.id != null || $scope.oficio.seleccionada != null){

		$scope.divMostrarBoton = false;
		$scope.ocultarDivInconforme = true;


		}
		
	}

$scope.activarDivAcuerdo = function(){

	if($scope.observaciones.seleccionada == null || $scope.acuerdo.seleccionada == null || $scope.motivo.seleccionada == null){

			swal({
						title: 'Alerta',
						text: "Para almacenar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
		}
	
		if($scope.observaciones.seleccionada != null || $scope.acuerdo.seleccionada != null || $scope.motivo.seleccionada != null){

		$scope.divMostrarAcuerdo = false;
		$scope.divOcultarMotivo = true;
		$scope.deshabilitarRadio = true;
		$scope.ocultarDivObservaciones = true;

		}

	}

$scope.activarDivNotificacion = function(){

	if($scope.modo.id == null || $scope.hora.seleccionada == null || $scope.cita.seleccionada == null || $scope.observacionesCitatorio == null && $scope.mostrarObservacionesCitatorio  == true){

			swal({
						title: 'Alerta',
						text: "Para almacenar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
		}

	if($scope.modo.id == null || $scope.hora.seleccionada == null || $scope.cita.seleccionada == null){

			swal({
						title: 'Alerta',
						text: "Para almacenar su registro, es necesario llenar todos los campos.",
						type: 'warning',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Aceptar'
					}).then(function () {
						window.location.href = "#!/nueva_inconformidad"
					})
		}

		if($scope.modo.id  != null || $scope.hora.seleccionada != null || $scope.cita.seleccionada != null){

		$scope.divMostrarNotificacion = false;
		$scope.ocultarDivNotificacion = true;


		}

	}


}]);