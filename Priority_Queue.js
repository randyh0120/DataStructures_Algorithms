// Priority Queue

/*
// Use Cases
// Anytime you have to keep retrieve items based on priority.
// Hospital System. i.e critical health level 1 2 3
// Software Creashes. i.e. importance in levels 1 2 3
// Background Processes/Threads in Computers
*/

/*
// Implementation
// We are going to use the same code as the MaxBinaryHeap and add/change some things around
// We update it so we can use a priority on top of the actual element/value
// We change the insert and extractMax functions to enqueue and dequeue
// Depending on whether a low number is higher priority you can change this from a MaxBinaryHeap to a MinBinaryHeap and vice versa
// To change this to a MinBinaryHeap, all you do is reverse the < > signs when comparing nodes. You can also change the variable name from max to min just to make it official
//
// We can also add implementation in the case we have two or ore patients with the same priority.
// Since they have the same prioirty you must help you whoever came first. Like in a line, since this is a priority and a queue
// If they are the same priority then we also compare the time.
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // If they are the same priority then compare the time.
    //this.time = Date.now();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    var idx = this.values.length - 1;

    const element = this.values[idx];

    // While the index is greater than 0 which is the root node
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.vales[parentIdx];
      console.log(parent);

      if (element.priority <= parent.priority) break;

      // If element > parent then do the rest
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    var idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      // Check if it's a valid index
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority > element) {
          swap = leftChildIdx;
        }
      }

      // Check if it's a valid index
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChild;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("Common cold", 1);
ER.enqueue("Gun shot wound", 5);
ER.enqueue("High fever", 2);
