/*
*
* Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Update (2014-11-02):
The signature of the function had been updated to return the index instead of the pointer.
If you still see your function signature returns a char * or String, please click the reload button  to reset your code definition.
*
* */

//accept 132ms
function implementStrStr(haystack, needle){
	var p=0;

    //"","a" -1; "","" 0; "a", "" 0
    if(needle.length == 0){
        return 0;
    } else if (haystack.length ==0){
        return -1;
    }

    //parse string to array
    for(var i =0; i< haystack.length; i++){

        if(haystack.charAt(i) == needle.charAt(0)){
            p = i;

            //if needle.length() > rest of haystack return -1
            if(needle.length > haystack.length - i){
                return -1;
            }

            //check if has needle
            var isPart = true;
            for(var j = 1; j< needle.length; j++){
                p++;
                if(p < haystack.length){
                    if(needle.charAt(j) != haystack.charAt(p)){
                        isPart = false;
                    }
                }
            }

            if(isPart){
                return i;
            }
        }
    }

    return -1;
    
}

console.log(implementStrStr("abcdecfs","dec"));
