// Dijkstras Algorithm

/*
// Dijkstra was a Dutch Software Engineer, Physicist, and Essayist
// He is a genius
// He advanced the field of computer science
// Out of the 30 most influential papers he wrote some 6 of them.
*/

// This algorithm is the Shortest Path

/*
// Use Cases
// GPS - Finding Fastes Route
// Network Routing - Finds open shortest path for data
// Biology - Used to model the spread of viruses among humans
// Airline Tickets - Finding cheapest route to your destination
*/

/*
// Implementation
// We will implement a wieghted graph
//
// Naive Priority Queue
// We use a Priority Queue to know which node to go through next.
// The smallest distance/weight will be added to the beginning.
//
// We initialize everything to infinite so we have a starting value to compare with.
*/

// This is the Naive Priority Queue
/*
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
*/

// This Priority Queue uses a Binary Heap and is a lot quicker
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);

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

      if (element <= parent) break;

      // If element > parent then do the rest
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
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

        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      // Check if it's a valid index
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Adds a weighted adge between the 2 vertices.
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight: weight });
    this.adjacencyList[v2].push({ node: v1, weight: weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // To return at the end

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //console.log(distances);

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        console.log(distances);
        console.log(previous);

        // We are Done and need to build a path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          console.log(neighbor);
          console.log(this.adjacencyList);

          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode);

          // Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;

          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;

            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;

            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    console.log(path);
    return path.concat(smallest).reverse();
  }
}

/*
var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "B", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E")
*/
