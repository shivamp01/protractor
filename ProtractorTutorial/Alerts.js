describe('alerts demo', function() {
	
	it('open non angular js  website', function() {
		browser.waitForAngularEnabled(false);
		browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
		element(by.id("confirmbtn")).click().then(function() {
		});
		browser.switchTo().alert().dismiss().then(function() {
			browser.sleep(2000);
		});
	})
	
})