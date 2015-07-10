app.controller('firstView', FirstView);

FirstView.$inject = ['$scope'];

function FirstView($scope){
	$scope.loc = 'first view';
}