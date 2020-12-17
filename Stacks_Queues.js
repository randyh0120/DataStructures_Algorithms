// Stack
// LiFo

// Ex.
// Manage Function Incovation
// Undo/Redo
// Routing (the History Object on a browser)

var arrayStack = [];

// This is from the end
arrayStack.push(55); // Push adds a value to the end of a stack/array
arrayStack.pop(); // Pop removes tha last item

// This is from the beginning
arrayStack.unshift(50); // Adds to the beginning
arrayStack.unshift(25); // Adds to the begginning
arrayStack.shift(); // Removes first item in stack

// Effeciency
// Push and Pop are more effecient since you don't have to
// reindex the array. That is if we are using arrays.

//// Singly Linked List Stack
// Stacks are suppose to be constant time
// A singly linked list is not a good way of implementing a stack because pop() is not constant time.
// You must traverse the entire list to reach the node before last to change it.
// What we do to combat this is essentially use shift and unshift as push and pop. The functions are changed a bit.
// Instead of adding and removing from the end, we do so to the beginning. This allows us to stay in constant time.
class Singly_Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList_Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Singly_Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    return ++this.length;
  }

  pop() {
    if (!this.head) return null;

    var temp = this.head;

    if (this.length === 1) {
      this.tail = null;
    }

    this.head = this.head.next;
    temp.next = null;
    this.length--;

    return temp.val;
  }
}

var singlyLinkedList_Stack = new SinglyLinkedList_Stack();
singlyLinkedList_Stack.push("First");
singlyLinkedList_Stack.push("Second");
singlyLinkedList_Stack.push("Third");
singlyLinkedList_Stack.push("Fourth");
