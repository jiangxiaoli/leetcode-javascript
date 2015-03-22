/**
 * Created by Corn on 3/17/15.
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//ac 159ms
var removeNthFromEnd = function(head, n) {
    if(n<0) {return head;}

    //find the end of list
    var length = 0;
    var curr = head;

    var stack = []; //use array in js as stack

    while (curr != null){
        stack.push(curr);
        curr = curr.next;
        length++;
    }

    if(length < n) {
        return head;
    } else if (length == n){
        //delete head
        head = head.next;
        return head;
    }

    var toDelete = stack.pop();

    for(var i = 2; i <= n; i++){
        toDelete = stack.pop();
    }

    var toDeletePre = stack.pop();

    toDeletePre.next = toDelete.next;

    return head;
};