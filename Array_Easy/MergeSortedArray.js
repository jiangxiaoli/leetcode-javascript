/**
 * Created by Corn on 12/19/14.
 *
 * Given two sorted integer arrays A and B, merge B into A as one sorted array.

 Note:
 You may assume that A has enough space (size that is greater or equal to m + n) to hold additional
 elements from B. The number of elements initialized in A and B are m and n respectively.
 *
 */

//add from begin to end - done
 function merge(arr1, arr2){
 	//merge arr2 into arr1
 	var index = 0;
 	for(var i = 0; i < arr2.length; i++){
 		// console.log("arr2 index: " + i +" is " + arr2[i]);
 		while(arr2[i] > arr1[index] && index < arr1.length) {		
 			index++;
 		}
 		// console.log("insert index: " + index);
		arr1.splice(index, 0, arr2[i]); //check splice api, first insert index, delete 0, add el

 	}
 	return arr1;
 }

//add from end to begin - done
function merge2(arr1, arr2){
	var m = arr1.length;
	var n = arr2.length;

	// console.log("m: " + m + " n: " + n);

	while( m > 0 && n > 0){
		if (arr2[n-1] > arr1[m-1]) {
			arr1[m+n-1] = arr2[n-1];
			n--;
		} else {
			arr1[m+n-1] = arr1[m-1];
			m--;
		}
	}

	while( n > 0){
		arr1[m+n-1] = arr2[n-1];
		n--;
	}
	return arr1;

}


 var arr1 = [1,5,6];
 var arr2 = [0,1,8,9];
 // console.log(merge(arr1, arr2));

 console.log(merge(arr1, arr2));


