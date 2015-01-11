/*
*Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
* */


//the limit is not fixed
function reverseInteger(num){
	if(num>Number.Infinity){
		return -1;
	}

	var num_s = num.toString();
	console.log("num_s: " + num_s);
	var reverse = num_s.split("").reverse().join("");
	console.log("reverse: " + reverse);

	//the limit is not fixed????
	if(parseInt(reverse) > Number.Infinity){
		return -1;
	} else {
		return parseInt("-"+ reverse);
	}

}

var num = 111111111299999999099999; //51 bit ,exceed exponent
console.log(reverseInteger(num));