// xiaoli's solution - ac 459ms

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var digits = n.toString().split('');//split digits of n
    //console.log(digits);

    var number = 0;
    var startTime = new Date().getTime(); //fetch starting time
    while(new Date().getTime() - startTime < 1 && number != 1 ){
        number = 0;
        for(var i = 0; i < digits.length; i++){
            number += digits[i]*digits[i];
        }
        digits = number.toString().split('');
        //console.log(number);
    }

    if(number == 1) return true;
    else return false;

};

var n = 19;
console.log(isHappy(n));


//ref: https://leetcode.com/discuss/34598/my-straightforward-solution-in-js
// Basically, I keep calculating the sum of squares until I come across one that I've already seen.
// The nice thing about this approach is that it memoizes all values so if this were used on multiple numbers,
// in the event that during the process a previously seen number is encountered, an answer can immediately be given.
// ac - 153ms
var isHappy = function(n) {
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
};

function sumOfSquares(numString) {
    return numString.toString().split('').reduce(function(sum, num) {
        return sum + Math.pow(num, 2);
    }, 0);
}