app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'	
	})

	.when('/login',{
		templateUrl: 'templates/login.html',
		controller: 'loginCtrl'	
	})

	.when('/nueva_inconformidad',{
		templateUrl: 'templates/nueva_inconformidad.html',
		controller: 'inconformidadCtrl'		
	})

	.when('/tabs',{
		templateUrl: 'templates/tabs.html',
		controller: 'tabsCtrl'		
	})

	.when('/tipo_ley',{
		templateUrl: 'templates/tipo_ley.html'		
	})

	.otherwise({
		redirectTo: '/'

	});

});