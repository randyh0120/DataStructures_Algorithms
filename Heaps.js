// Heaps

// What is a Binary Heap?
// A Heap is similar to a BST, but has different rules
// Like a BST a Binary Heap can only have 2 children per node.

/*
// Max Binary Heap:
// Parent nodes are always larger than child nodes.
// Each Parent has at most 2 children.
// There is no order between siblings.
// A binary heap is as compact as possible. All the children of each node are as full as they can be. The left children are filled out first.
// They are not sorted like a BST.
// All that matters is that the Parent Node is larger than the child.
//          41
//         /  \
//       39    33
//      /  \   /
//     18  27 12
*/

/*
// Min Binary Heap:
// Parent Nodes are always smaller than child nodes
// They are not sorted like a BST.
// All that matters is that the Parent Node is smaller than the child
//           0
//         /   \
//        2     3
//      /  \   /  \
//     17  19 36   7
//    /  \
//   25  100
//
*/

/*
// Use Cases
// A Priority Queue is implemented using a Binary Heap
// Graph Traversals
*/

/*
// Heap Implementation
//
// We can represent a Heap with an array
// To do this you must use a little math
// 100
//     19 16
//           17 12 25 5
// 100 19 16 17 12 25 5
//
// You can reference the parent and children by understanding
// which level they are at and how many children on can have.
// Left side always comes first.
//
// To calculate the children of a node you must
// mulitple that nodes index (index in the array and node actual value) by 2 and add 1. Now you are at its left child node. Add 1 again and you are at its right child node.
// Formula: 2n + 1  -> n being the index in the array
// Left node: 2n + 1
// Right node: 2n + 2
//
// If we have a child node and you want its parent, then you subtract by 1 and divide by 2. You floor this number to get the current index.
// Flooring the result will get the correct node for both left and right, since the right is further than the left in the array.
// Formula: (n-1) / 2 -> Floor the result
//
*/
