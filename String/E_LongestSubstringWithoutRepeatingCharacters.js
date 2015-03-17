/*Given a string, find the length of the longest substring without repeating characters.
For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
For "bbbbb" the longest substring is "b", with the length of 1.*/

//two pointers

//accept 260ms
function longestSubstring(s){
	// var p=0, q=0; //p: start of the sub, q: end of the queue

	//hashmap in js????? Array.indexOf
	var sub = [];
	var max = 0;

	for(var i = 0; i< s.length; i++){
		var index= sub.indexOf(s.charAt(i));
		if(index == -1){
			sub.push(s.charAt(i));
			// q++;
		} else {
			//find repeat, get index of repeat el, remve all el before that index
			sub = sub.slice(index+1, sub.length);
			sub.push(s.charAt(i));
		}
		max = Math.max(max, sub.length);
	}
	return max;
}


var tt = "babcabcdbb"
var test="hnwnkuewhsqmgbbuqcljjivswmdkqtbxixmvtrrbljptnsnfwzqfjmafadrrwsofsbcnuvqhffbsaqxwpqcac";//12
var test1="wlrbbmqbhcdarzowkkyhiddqscdxrjmowfrxsjybldbefsarcbynecdyggxxpklorellnmpapqfwkhopkmco";//12
var test2="msboaguwnnyqxnzlgdgwpbtrwblnsadeuguumoqcdrubetokyxhoachwdvmxxrdryxlmndqtukwagmlejuu";//14

console.log(longestSubstring(test2));




