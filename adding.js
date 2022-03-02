/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    
    let result = new ListNode(0)
    let currentNode = result
    let carryover = 0
   while(l1 != null || l2 != null){
       let v1 = 0 
       let v2 = 0 
       
       if(l1 != null) v1 = l1.val
       if(l2 != null) v2 = l2.val
       
       let sum = v1 + v2 + carryover
       carryover = Math.floor(sum/10)
       sum = sum % 10 
       currentNode.next = new ListNode(sum) 
       
       currentNode = currentNode.next 
        if(l1 != null) l1 = l1.next
         if(l2 != null) l2 = l2.next
       
    
    
   }
    if(carryover > 0){
        currentNode.next = new ListNode(carryover)
    }
    
    
   
    return result.next
};