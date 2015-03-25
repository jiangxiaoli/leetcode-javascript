
/*
*
* Compare two version numbers version1 and version1.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three",
it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
* */

//ac 140ms
function compareVersionNumber(a, b){
	//split version by digits
    var a = a.split(".");
    var b = b.split(".");

    //get rid of useless 0
    a = removeZero(a);
    b = removeZero(b);


    for(var i = 0; i < Math.min(a.length, b.length); i++){
        if(parseInt(a[i]) > parseInt(b[i])){
            return 1;
        } else if(parseInt(a[i]) < parseInt(b[i])){
            return -1;
        }
    }

    //test case "1.3 & 1"
    if(a.length < b.length){
        return -1;
    } else if(a.length > b.length){
        return 1;
    }

    return 0;

}

function removeZero(str){
	var p = 0;
    //from back to head, check 0
    for(var i = str.length-1; i >= 0; i--) {
    	//stop when find the first non zero, 1.1.3.0.0.0.0 -> 1.1.3
        if(parseInt(str[i]) != 0){
            p = i;
            break;
        }
    }
    //remove 0 from position p to the end
    return str.slice(0, p+1);
}

console.log(compareVersionNumber("1.0.1.0.0.0", "1.0.1.1.0.0.0.0.0"));
