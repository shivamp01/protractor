describe('chain locators demo', function() {
	
	it('opening angular js website', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/')
		element(by.model('first')).sendKeys('10');
		element(by.model('operator')).element(by.css('option:nth-child(5)')).click();
		element(by.model('second')).sendKeys('3');
		element(by.id('gobutton')).click();
		
		element(by.css('h2[class="ng-binding"]')).getText().then(function(text) {
			console.log(text)
		});
		/*element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text) {
			console.log(text)
		})*/
	
	
	
	
	})
	

	
})