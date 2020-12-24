// Dijkstras Algorithm

// Dijkstra was a Dutch Software Engineer, Physicist, and Essayist
// He is a genius
// He advanced the field of computer science
// Out of the 30 most influential papers he wrote some 6 of them.

// This algorithm is the Shortest Path

// Use Cases
// GPS - Finding Fastes Route
// Network Routing - Finds open shortest path for data
// Biology - Used to model the spread of viruses among humans
// Airline Tickets - Finding cheapest route to your destination

// We will implement a wieghted graph

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
