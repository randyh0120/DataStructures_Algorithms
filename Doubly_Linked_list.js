// Doubly Linked List
// Big O
// Insertion: O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)

// Use Case:
// Web Browsing
// You can go to the previous and next page

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
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newNode;
      newHead.next = this.head;
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
    var foundNode = this.get(index);

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    var newNode = new Node(val);

    newNode.next = afterNode;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();

    if (index === this.length - 1) {
      this.pop();
    }

    var removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}
