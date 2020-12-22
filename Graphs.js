// Graphs

// What is a Graph
// A Graph is a collection of Nodes and the connection between those Nodes
// The name Vertex and Node are interchangable

/*
// Big O
// |V| - number of vertices
// |E| - number of edges
// Add Vertex: Adj List: O(1) | Ajc Matrix: O(|V^2|)
// Add Edge: Adj List: O(1) | Ajc Matrix: O(1)
// Remove Vertex: Adj List: O(|V| + |E|) | Ajc Matrix: O(|V^2|)
// Remove Edge: Adj List: O(|E|) | Ajc Matrix: O(1)
// Query: Adj List: O(|V| + |E|) | Ajc Matrix: O(1)
// Storage: Adj List: O(|V| + |E|) | Ajc Matrix: O(|V^2|)
//
// Adj List
// Can take up less speace (in sprarse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge
//
// Adj Matrix
// Takes up mpre space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge
*/

/*
// Use Cases
// Recommdation Engine like Netflix recommending a movie
// Modeling Users in any social network
// Facebook/Linkedin Friend Connection
// Advertising Targeting
// Location/Mapping
// Routing Algorithms
// Visual Hierarchy
// File System Optimizations
// They are using a Graph
*/

/*
// Storing Graphs: 
// 
// Adjacency Matrix
// List all the Nodes and connections between them
// We represent the data in a Matrix
// All we store in the Matrix are the edges
// Undirected Graphs are Symmetrical
// Dirrected Graphs are NOT Symmetrical
//
// When to use a Matrix?
// When your Nodes in the data are very connected.
// Multiple connections per node. 
// When a matrix would be filled up a lot.
//
// Adjacency List
// List all the edges then the Node
// We represent it with a Hash Map with kay-values
// i.e.:
// A: ["A", "B"],
// B: ["A", "C"]
//
// When to use a List?
// When your Nodes have fewer Connections per Node.
// More Sparse data.
// Most data in the real world is like this.
*/

/*
// Undirected graphs
// Have edges that do not have a direction. 
// The edges indicate a two-way relationship, in that each edge can be traversed in both directions.
// Like a Doubly Linked List
//
// Directed graphs
// Have edges with direction. 
// The edges indicate a one-way relationship, in that each edge can only be traversed in a single direction.
// Like a Singly Linked List
*/

/*
// We will use an Adjacency List
// 
// Why?
// This takes up less space of the two.
// Most data in the real-world tends to be sparser and/or larger graphs
//
// We will build an Undirected Graph
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // In this case if we have a duplicate we will overwrite it.
    // You can easily check for this.
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    // If this was a directed graph we would only do
    // the first line of code and not both of them.
    // It will only be connected in one direction.
    this.adjacencyList[v1].push[v2];
    this.adjacencyList[v2].push[v1];
  }
}
