/**
 * Created by Corn on 12/21/14.
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.
 For the purpose of this problem, we define empty string as valid palindrome.

 *
 */

//ac 227ms
function isAlphanumeric(char){
    var regex =/^[a-z0-9]+$/i;
    return regex.test(char);
}

function validPalindrome(str){
	
	//compare and ignore non-alphanumeric characters
	if(str === ""){
		return true;
	}

	str = str.toLowerCase().trim();

	//two pointers
	var p = 0, q = str.length-1;
	while(p < q){

        //check if non-alphanumeric characters, p++ or q--
		while(!isAlphanumeric(str.charAt(p)) && p < q){
			p++;
		}

		while(!isAlphanumeric(str.charAt(q)) && q > 0){
			q--;
		}

		if(str.charAt(p) === str.charAt(q)){
			p++;
			q--;
		} else if(p<q) {
			return false;
		}
	}

	return true;
}

var str = "abc d dcb a";
var str2 = ".,";
var str3 = "Bab";
var str4 = ".....a....";
var str5 ="ab";

console.log(validPalindrome(str5));




