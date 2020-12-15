// Piece of Data - val
// Reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// var first = new Node("Hello");
// first.next = new Node(" ");
// first.next.next = new Node("World");
// first.next.next.next = new Node("!");

// var list = new SinglyLinkedList();
// list.push("Hello");
// list.push("There");
