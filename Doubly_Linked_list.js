// Node
// - val
// - next
// - prev

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List
// - head
// - tail
// - length

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    var temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  shift() {
    if (!this.head) return undefined;

    var oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newHead = new Node(val);

    if (!this.head) {
      this.head = val;
      this.tail = val;
    } else {
      this.head.prev = newNode;
      newHead.next = oldHead;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (this.length < 0 || index >= this.length) return null;

    var count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    var foundNode = get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
}
