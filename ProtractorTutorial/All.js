describe('All locators demo', function() {
	//function needs to be declared in describe block and outside all it blocks
	function add(a,b){
		element(by.model('first')).sendKeys(a);
		
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	}
	
	it('opening angular js website', function() {
		
		browser.get('http://juliemr.github.io/protractor-demo/')
		
		add(5,3);
		add(5,8);
		add(2,7);
		add(1,2);
		
		
		element.all(by.repeater('result in memory')).count().then(function(text) {
			console.log(text)
		})
		
		element.all(by.repeater('result in memory')).each(function(item) {
			item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
				console.log(text)
			})
		})
	
	

	})
	

	
})