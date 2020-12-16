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

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = current;

    // Loop through
    while (current.next) {
      console.log(current);

      newTail = current;
      curent = current.next;
    }

    // Update tail and tail.next
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // If list is length 0
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
}

// var first = new Node("Hello");
// first.next = new Node("World");
// first.next.next = new Node("!");

// var list = new SinglyLinkedList();
// list.push("Hello");
// list.push("There");
