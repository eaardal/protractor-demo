app.controller('secondView', SecondView);

SecondView.$inject = ['$scope'];

function SecondView($scope){
	$scope.loc = 'second view';
}