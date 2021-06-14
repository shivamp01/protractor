describe('protractor baby steps', function(){
	
	function selectItem(name){
	
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function(text) {
				if(text==name){
					item.element(by.tagName("button")).click();
				}
			})
		})
	}
	
	it('opening angular js website', function() {
		browser.driver.manage().window().maximize();
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("tony stark");
		element(by.css("input[name='email']")).sendKeys('ironman@gmail.com');
		element(by.id("exampleInputPassword1")).sendKeys("tony@stark123");
		element(by.id("exampleCheck1")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).get(0).click();
		element(by.name("bday")).sendKeys("01-06-1998").then(function() {
	
		})
		element(by.buttonText("Submit")).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
				
				element(by.name("name")).clear();
				element(by.name("name")).sendKeys("M").then(function() {
					element(by.css("div[class*='danger']")).getText().then(function(text) {
						console.log(text);
					})
				});
			
				element(by.css("input[name='email']")).clear().then(function() {
					expect(  element.all(by.css("div[class*='danger']")).count()).toEqual(1);
				});
				
				
			})
		});
		element(by.linkText('Shop')).click();
		selectItem("Samsung Note 8");
		selectItem("iphone X");
		element(by.partialLinkText("Checkout")).getText().then(function(text) {
			var sp=text.split("(");
			expect(sp[1].trim().charAt(0)).toBe("2");
		})
		element(by.partialLinkText("Checkout")).click();
	
		
		
	
		
		
		
		
		
		
		
	})
		
})