var app = angular.module('foobar', []);

app.controller('fooctrl', fooctrl);

fooctrl.$inject = ['$scope'];

function fooctrl($scope){
	$scope.hello = 'Greetings, world';
}