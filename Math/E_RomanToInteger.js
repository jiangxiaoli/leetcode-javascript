/**
 * Created by Corn on 3/17/15.
 */
/**
 * @param {string} str
 * @returns {number}
 */

//ac 336ms
var romanToInt = function(str) {
    if(str == null) return -1;

    var num = charToInt(str.charAt(0));
    var pre, curr;

    for(var i = 1; i < str.length; i++){

        curr = charToInt(str.charAt(i));
        pre = charToInt(str.charAt(i-1));

        //if pre is bigger, add directly, else minus pre*2 + curr
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }

    return num;
};

function charToInt(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}