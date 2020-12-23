// Graph Traversal

/*
// Use Cases
// Peer to Peer Networking
// Web Crawlers
// Finding "Closest" matches/recommendations
// Shortest path problems
//   GPS
//   Solving Mazes
//   AI (Shortest path to win the game)
*/

/*
// 2 Main Ways to traverse a Graph
// DFS & BFS
//
// DFS
// Tree: We visit children before we visit siblings.
// Graph: We visit neighbors before we visit siblings
// We deepen before we widen.
//
// BFS
// 
*/

/*
// Implementation
// This will be a DFS Implementation
// We use the Graph we made in Graph.js
// We will visit every Node/Vertex in this example
// This will be a recursive solution
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

  removeEdge(vertex1, vertex2) {
    // No error checkin implemented
    // If v1 or v2 doesn't exist, you can return null or undefined

    // Filter for vertex2 and remove from vertex1 connection
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    // Filter for vertex1 and remove from vertex2 connection
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      // Since this is an undirected graph
      // the order in the below function call does not matter
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(start) {
    const result = [];
    const visited = {};
    this.adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      //console.log(adjacencyList[vertex])

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

/*
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

g.depthFirstRecursive("A")
*/
