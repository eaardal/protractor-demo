describe('fooctrl', function(){
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
		return $controllerConstructor('fooctrl', {
            $scope: $scope
        });
	}

	it('exists', function(){
		expect(createSut()).toBeDefined();
	});

});