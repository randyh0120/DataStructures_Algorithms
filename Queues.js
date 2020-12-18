// Queue
// FiFo

// You add to the end and remove from the beginning.

// Ex.
// Printers
// Shopping Line

// Queue using an array
// When using an array as a Queue
// You can use unshift() combined with pop()
// or
// push() combined with shift()
var q = [];

// Linked List based Queue
// Performance is better than an array
// You add to the end and remove from the beginning.
class Queue {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList_Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enQueue(val) {
    var newNode = new Queue(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  deQueue(val) {
    if (!this.first) return null;

    var temp = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.temp.next = null;
    this.length--;

    return temp.val;
  }
}
