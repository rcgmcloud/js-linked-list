/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  var newLinkedList = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };

var head = null;
var tail = null;

function getHead(){
  return head;
}

function getTail(){
  return tail;
}

function add(newValue){

  var node = {
  value: newValue,
  next: null
  };

  if(head === null){
    head = node;
    tail = node;
  } else {
    tail.next = node;
  }
  tail = node;
  return node;
}

function remove(index){
  //
  var n1 = get(index-1);
  var nx = get(index);
  var n2 = get(index+1);

  if(!get(index)){
    return false;
 } else if(nx === tail){
    n1.next = null;
    tail = n1;
  } else if (nx === head){
      head = n2;

      nx.next = null;
  } else {
    n1.next = n2;
  }
}

function get(index){
  var counter = 0;
  var x = head;
  while(counter < index){
    x = x.next;
    counter ++;
    if(x === tail && counter < index){
     return false;
    }
  }
  if(x === null || index < 0)
      return false;
  return x;
}

function insert(value,index){
  var nx = {
    value: value,
    next: null
  };
  var n1 = get(index - 1);
  var n2 = get(index);
console.log(head);

   if(!n2){
     return false;
  }
  if(index === 0){
    nx.next = n2;
    head = nx;
  } else {
    //console.log(head);
    nx.next = n2;
    n1.next = nx;
    //console.log(head)
  }
  return nx;
}

return newLinkedList;
}