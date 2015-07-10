describe('first view', function(){
	var baseUrl = 'http://localhost:8080/app/src/index.html#';
	var firstViewUrl = baseUrl + '/';

	describe('has correct state', function(){
		it('should set loc to "first view"', function(){
			browser.get(firstViewUrl);

			var loc = element(by.binding('loc'));
			
			loc.getText().then(function(text){
				expect(text).toBe('first view');
			});
		});
	});
/*
	describe('when navigating', function(){
		it('should navigate to second view', function(){
			browser.get(baseUrl + '/');

			var loc = element(by.id('nav'));
			
			var value;
			loc.getText().then(function(text){
				value = text;
			});

			loc.click();

			browser.waitForAngular();
		});
	});
*/
});