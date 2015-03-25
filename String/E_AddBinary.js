/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*
* */

//ac 150ms
function addBinary(a, b){
	var m = a.length, n = b.length;
	var indexa, indexb;
	var temp = 0, add = 0; //store temp cal value
	var result = "";

	//offset i
	for(var i = 1; i <= Math.max(m, n); i++){
		indexa = m - i;
		indexb = n - i;
		if (indexa >= 0 && indexb >= 0) {
			temp = add + parseInt(a.charAt(indexa)) + parseInt(b.charAt(indexb));
		} else if(indexb < 0) {
			temp = add + parseInt(a.charAt(indexa));
		} else if(indexa < 0) {
			temp = add + parseInt(b.charAt(indexb));
		}

		if (temp > 1) { 
			add = 1;
			temp -= 2;
		} else {
			add = 0;
		}

		result = temp + result; //add temp to the first digit
	}

	//handle the first digit for add
    if(add == 1){
        result = add + result; //add 1 to the first digit
    }
    return result;
}

console.log(addBinary("10", "1010"));
