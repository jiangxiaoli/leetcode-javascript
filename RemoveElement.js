// Given an array and a value, remove all instances of that value in place 
// and return the new length.

// The order of elements can be changed. 
// It doesn't matter what you leave beyond the new length.

function removeElement(arr, val){

	console.log(arr);

	//if val is not in arr, return original arr length
	if(arr.indexOf(val) === -1){
		return arr.length;
	}

	var index = 0;
	for(var i = 0; i < arr.length; i++){

		//remove val in array by move forward the other element
		if(arr[i] !== val){
			arr[index++] = arr[i];
		}
	}

	arr.splice(index, arr.length-index); //modify the changed array, remove rest elements
	console.log(arr);

	return index;	
}

var arr = [1,2,3,4,5,5,6,7,3,8,8,9,5];

console.log(removeElement(arr, 8));