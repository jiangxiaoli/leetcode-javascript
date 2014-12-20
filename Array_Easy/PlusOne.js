// Given a non-negative number represented as an array of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.

function plusOne(arr){
	var n = arr.length;
	if(arr[n-1] !== 9){
		arr[n-1]++;
	} else {

		var q = n-1;
		while(arr[q] === 9 && q>0){
			arr[q] = 0; //find all the connected 9s 
			q--;
		}
		arr[q]++; 

		if(arr[0] === 10){
			//expand array
			arr[0] = 1;
			arr.push(0);
		}

	}
	return arr;
}

arr = [1,9,9,9];
console.log(plusOne(arr));



