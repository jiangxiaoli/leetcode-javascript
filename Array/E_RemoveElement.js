// Given an array and a value, remove all instances of that value in place 
// and return the new length.

// The order of elements can be changed. 
// It doesn't matter what you leave beyond the new length.

//ac 142ms
function removeElement(A, elem){
	//if val is not in arr, return original arr length
	if(A.indexOf(elem) === -1){
		return A.length;
	}

	var index = 0;
	for(var i = 0; i < A.length; i++){

		//remove val in array by move forward the other element
		if(A[i] !== elem){
			A[index++] = A[i];
		}
	}

	A.splice(index, A.length-index); //modify the changed array, remove rest elements

	return index;	
}

var arr = [1,2,3,4,5,5,6,7,3,8,8,9,5];

console.log(removeElement(arr, 8));