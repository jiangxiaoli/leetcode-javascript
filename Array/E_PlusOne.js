// Given a non-negative number represented as an array of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.

//ac 147ms
function plusOne(digits){
	var n = digits.length;
	if(digits[n-1] !== 9){
		digits[n-1]++;
	} else {

		var q = n-1;
		while(digits[q] === 9 && q>0){
			digits[q] = 0; //find all the connected 9s
			q--;
		}
		digits[q]++;

		if(digits[0] === 10){
			//expand array
			digits[0] = 1;
			digits.push(0);
		}

	}
	return digits;
}

arr = [1,9,9,9];
console.log(plusOne(arr));



