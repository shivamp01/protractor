var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementBasics.js'],
  //for running on different browser
  onPrepare : function(){
	  browser.driver.manage().window().maximize();
	  //executes before all the test cases of the spec file
	  //common global prerequisite
	  
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
		   
  },
  suites:{
	 Smoke:['Dropdown.js','ChainLocators.js'],
	 Regression:"ElementBasics.js"
  },
  capabilities: {
	  'browserName': 'chrome'
	},
	//for colours in command prompt
	jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	  }
};