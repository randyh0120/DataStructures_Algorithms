// Traversals
// BST is great if you need to compare or sort data.

// BFS (Breath First Search)
// Left to Right

// DFS (Depth First Search)
// Top to Bottom
// 3 Main Orders
// 1. In Order
//      Starting from the bottom to the top
//      Smallest value first from left to right
// 2. Pre-Order
//      Top to Bottom like Normal
// 3. Post-Order
//      Start from Bottom Node Level or Depth

// BFS or DFS which is better
// Depends on Tree
//
// If there are lots of nodes to keep track of then
//    Breath First Search (BFS) would be the best option.
//    BFS is best with a wide tree,
//    if it is wider than it is deep
//
// DFS - In Order
//   This is used most commonly with BST
//   Notice we get all nodes in their underlying or asceending order.
//   We would use "In Order" if you want to retrieve the data in a specific order like ascending
//
// DFS - Pre Order
//   Can be used to "export" a tree structure so that it is easily reconstructed or copied
//   Pre Order is great if we want to duplicate it or flatten out the tree to store it in a file or db
//
// DFS - Post Order
