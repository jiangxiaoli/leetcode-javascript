// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

//ac, 114ms
function majorityElement(num) {
    var n = num.length;
    if(n == 1) return num[0];

    //use object as hash table to store key-value pair
    var els = {};

    for(var i = 0; i < n ; i++ ){
        var curr = num[i];
        //check if hash has the key
        
        if (els.hasOwnProperty(curr)) {
            els[curr]++;//update value
            if(els[curr] > n/2) return curr;
        } else {
            els[curr] = 1; //create key-val in hash
        }

    }
    return -1; //not found
}

var num = [1,1,1,3,4,5];
console.log(majorityElement(num));
