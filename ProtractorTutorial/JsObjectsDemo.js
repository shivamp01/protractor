/**
 * 
 */

function Car(){
	
	this.firstInput=element(by.model('first'));
	this.secondInput=element(by.model('second'));
	this.go=element(by.id('gobutton'));
	this.getResult=element(by.css('h2[class="ng-binding"]'));
	this.color="red";
	this.engine="turbo";
	this.brand="BMW";
	this.search="by.css('input[type='abc']')";
	
	this.getModel=function(){
		console.log('this is a 2020 model');
	};
	
	this.getURL=function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
};

module.exports= new Car();
//var obj=new Car();
/*obj.getModel();
console.log(obj.engine);*/