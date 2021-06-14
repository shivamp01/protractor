describe('protractor baby steps', function() {
	
	it('opening angular js website', function() {
		browser.get('https://angularjs.org');
		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
		//	browser.sleep(9000);
			console.log('I am the last step to execute');
		})
	
	})
	
	it('close web browser', function() {
		
	})
	
})