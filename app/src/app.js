var app = angular.module('foobar', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'first-view.html',
			controller: 'firstView'
		})
		.when('/second', {
			templateUrl: 'second-view.html',
			controller: 'secondView'
		})
		.otherwise({
			redirectTo: '/'
		});
});