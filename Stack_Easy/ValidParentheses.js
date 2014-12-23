/*
*
* Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
* determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*
* */

//tag stack

//done
function validParentheses(str){
	//use js array, push, pop
	//if "(" "{" "[", push, if ")" "}" "]" pop, the final array should be empty
	var array = [];
	for(var i =0; i< str.length; i++){
		var curr = str.charAt(i);
		if(curr === "(" || curr === "{" || curr === "[" ){
			array.push(curr);
		} else {
			var peek = array.pop();
			if((curr === ")" && peek ==="(")|| (curr === "}" && peek ==="{") || (curr === "]" && peek ==="[") ){
				// array.pop();
			} else {
				array.push(peek); //push back and push in current
				array.push(curr);
			}

		}		
		console.log(array);
	}
	if(array.length != 0){
		return false;
	} else {
		return true;
	}

}

var str  = "[{}][({})][][][]{}{}";
console.log(validParentheses(str));
