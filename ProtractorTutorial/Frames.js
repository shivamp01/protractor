describe('alerts demo', function() {
	
	it('open non angular js  website', function() {
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
		
		browser.getTitle().then(function(title) {
			console.log(title);
		})
		
		browser.switchTo().frame(element(by.id("courses-iframe")).getWebElement());
		browser.driver.switchTo().parentFrame();
		element(by.css("a[href*='sign_in']")).getText().then(function(text) {
			console.log(text);
		});
	
	})
	
})