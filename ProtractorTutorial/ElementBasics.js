describe('protractor calculator test demo', function() {
	var obj=require("./JsObjectsDemo.js");
	
	var d=require("./data.js");
	
	var using=require('jasmine-data-provider');
	
	beforeEach(function() {
		//browser.driver.manage().window().maximize();
		obj.getURL();
	  });
	
	
	
	//there are 2 parameters
	//1st is the parent object
	//2nd is a function in that
	//data stores actual object
	//description stores name of the sub object
	//for every iteration one dataset is picked
	using(d.datadriven, function (data,description) {
		
		

	
	it('testing calculator functionality '+ description, function() {
		//for non angular apps
	//	browser.waitForAngularEnabled(false);
		//browser.get('http://google.com');
		///////
		
	
		/*obj.firstInput.sendKeys(d.datadrive.firstNumber);
		obj.secondInput.sendKeys(d.datadrive.secondNumber);
		obj.go.click();
		//jasmine by default takes care of promises resolve
		expect(obj.getResult.getText()).toBe(d.datadrive.result);
		obj.getResult.getText().then(function(text) {
				console.log(text);
		});*/
		
		obj.firstInput.sendKeys(data.firstNumber);
		obj.secondInput.sendKeys(data.secondNumber);
		obj.go.click();
		//jasmine by default takes care of promises resolve
		expect(obj.getResult.getText()).toBe(data.result);
		obj.getResult.getText().then(function(text) {
				console.log(text);
		});
		
	})
	});
	it('close web browser', function() {
		
	})
	
	afterEach(function() {
		console.log('Test execution completed');
	});
	
})