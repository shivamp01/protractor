
//simple object creation and export
/*module.exports.datadrive={
		firstNumber="5",
		secondNumber="4",
		result="9"
}*/


//jasmine-data-provider syntax to export the objects
module.exports={
datadriven: {

firstData:{
		firstNumber:"5",
		secondNumber:"4",
		result:"9"
},

secondData:{
		firstNumber:"5",
		secondNumber:"3",
		result:"8"
},

thirdData:{
		firstNumber:"5",
		secondNumber:"1",
		result:"6"
}
}
}
//console.log(datadrive.firstNumber);
