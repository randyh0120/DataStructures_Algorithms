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

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.head;

    var newNode = this.head;

    while (index !== 0) {
      newNode = newNode.next;
      index--;
    }

    return newNode;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.length++;
      this.push(val);
      return true;
    }

    // !! makes it a boolean
    if (index === 0) return !!this.unshift(val);

    var prev = this.get(index - 1);
    var newNode = new Node(val);

    if (prev) {
      newNode.next = prev.next;
      prev.next = newNode.val;
      this.length++;
      return true;
    }
  }
}

// var first = new Node("Hello");
// first.next = new Node("World");
// first.next.next = new Node("!");

// var list = new SinglyLinkedList();
// list.push("Hello");
// list.push("There");
