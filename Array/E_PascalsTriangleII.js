// reference: http://blog.csdn.net/abcbc/article/details/8982651
// replace each row
/*
* n=3, n+1 numbers
* 1000 n=1
* 1100
* 1110
* 1210 n=2
* 1211
* 1231  //count each number from right to left
* 1331 n=3
*
* */

//ac 137 ms
function pascalTriangleII(rowIndex){
	var result = [];
	//init result array
	for(var i = 1; i <rowIndex+1 ; i++ ){
        result.push(0);
    }

    result[0] = 1;

    //calculate
    for (var i = 1; i <= rowIndex; i++) {
        result[i] = 1;
        for (var j = i - 1; j > 0; j--) {
        	result[j] = result[j] + result[j-1];
        }
    }

    return result;
}

console.log(pascalTriangleII(2));


        