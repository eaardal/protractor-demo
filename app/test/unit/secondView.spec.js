describe('secondView controller', function(){
	var $controllerConstructor;
	var $rootScope;
	var $q;
	var $scope;

	beforeEach(module('foobar'));

	beforeEach(inject(function ($controller, _$rootScope_, _$q_) {
        $controllerConstructor = $controller;
        $scope = _$rootScope_.$new();
        $rootScope = _$rootScope_;
        $q = _$q_;
    }));

	function createSut(){
		return $controllerConstructor('secondView', {
            $scope: $scope
        });
	}

	it('exists', function(){
		expect(createSut()).toBeDefined();
	});

	it('should set loc to "second view"', function(){
		var sut = createSut();
		expect($scope.loc).toBe('second view');
	});
});