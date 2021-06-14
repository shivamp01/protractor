function add(a,b){
	
	return a+b;
}

console.log(add(10,20));
console.log(add(1,20));
console.log(add(10,2));

var c=5;
var arr=["a","b","c","d",5];
console.log(arr.length+" is the size of array"+" and type of the element is"+ typeof arr)
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}

var brr=new Array();
brr[0]='shivam';
brr[1]='ramesh';
brr[2]=7;
brr[3]='suresh';
//console.log(JSON.stringify(brr));

//printing array in reverse order
for(var i=brr.length-1;i>=0;i--){
	console.log(brr[i]);
}