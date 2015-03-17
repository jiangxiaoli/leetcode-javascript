/**
 * Created by Corn on 3/17/15.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//ac 184 ms
var deleteDuplicates = function(head) {
    if(head === null) return null;

    var curr = head;
    while(curr !== null && curr.next != null){
        while(curr.next != null && curr.next.val == curr.val){
            curr.next = curr.next.next;
        }
        curr= curr.next;
    }

    return head;

};