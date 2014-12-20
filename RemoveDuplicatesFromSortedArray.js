// Given a sorted array, remove the duplicates in place such that each element 
// appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array A = [1,1,2],

// Your function should return length = 2, and A is now [1,2].

function removeDup(arr){
	var n = arr.length;
	if(n <= 1){
		return n;
	}

	//two pointers for dup search
	var p = 0, q = 0; //p hold the start of dup, q holds the end of dup

	while(q < n){
		if(arr[p] === arr[q]){
			q++;
		} else {
			p++; //save the dup el, move to the next same el to replace with different el
			arr[p] = arr[q]; //replace dup with the first different el
			q++; //search next el
		}
	}

	//trim array
	arr.splice(p+1, n-p-1);//remove the rest el, start from the 

	console.log(arr);

	return p+1;
}

var arr = [0,1,1,2,2,5,6,8];
console.log(removeDup(arr));
