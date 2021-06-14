describe('All locators demo', function() {
	//function needs to be declared in describe block and outside all it blocks
	function calc(a,b,c){
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		
		
		element.all(by.tagName('option')).each(function(item) {
			item.getAttribute('value').then(function(text) {
				if(text==c){
					item.click();
				}
			})
		})
		
		
		element(by.id('gobutton')).click();
	}
	
	it('opening angular js website', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/')
		
		calc(10,2,'MULTIPLICATION');
		calc(10,2,'ADDITION');
		calc(10,2,'SUBTRACTION');
		calc(10,2,'DIVISION');
		
		element.all(by.repeater('result in memory')).each(function(item) {
			item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
				console.log(text)
			})
		})
	

	})
	

	
})