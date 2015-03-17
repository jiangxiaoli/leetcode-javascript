
/*
* The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*
* */

 //ac 153ms
function countAndSay(n){
	var seq = "", temp = "1";
    for(var i = 1; i<= n; i++){
        seq = temp;
        temp = buildSeq(temp);
        console.log("seq: " + seq);
    }
    return seq;
}

function buildSeq(seq){
	var result = "";
    var len = seq.length, p = 1, count = 1;
    var temp = seq.charAt(0);

    while(p < len){
        while(p < len && seq.charAt(p) == temp){
            p++; count++;
        }
        //stop count
        result = result+ count + temp;

        if(p < len){
            temp = seq.charAt(p);//find the next count
            count = 1;
            p++;
        }
    }

    //for the situation of last one with one 11221
    if(count == 1){
        result = result+ count + temp;
    }

    return  result;
}

console.log(countAndSay(6));
