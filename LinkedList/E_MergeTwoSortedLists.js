/**
 * Created by Corn on 3/16/15.
 */

/*
* Merge two sorted linked lists and return it as a new list.
* The new list should be made by splicing together the nodes of the first two lists.
* */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//ac 176ms
var mergeTwoLists = function(l1, l2) {
    if(l1 == null && l2 == null) return null;
    else if(l1 == null) return l2;
    else if(l2 == null) return l1;

    var head;
    //init the head of newNode
    if(l1.val < l2.val){
        head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        head = new ListNode(l2.val);
        l2 = l2.next;
    }

    //iterate until one get to end
    var node = head; //store temp node
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            node.next = new ListNode(l1.val);
            node = node.next;
            l1 = l1.next;
        } else {
            node.next = new ListNode(l2.val);
            node = node.next;
            l2 = l2.next;
        }
    }

    //finish the rest of l1 or l2 list node
    while(l1 != null){
        node.next = new ListNode(l1.val);
        node = node.next;
        l1 = l1.next;
    }
    while(l2 != null){
        node.next = new ListNode(l2.val);
        node = node.next;
        l2 = l2.next;
    }

    return head;
};