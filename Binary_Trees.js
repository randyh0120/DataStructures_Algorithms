//// Trees
// Root - Top most node
// Child - A node connected directly under to another node
// Parent - A node connected one level above another node
// Siblings - A group of nodes with the same parent node
// Leaf - A node with no children
// Edge - The connection between one node and another

// Big O
// Not guaranteed
// Best and Average case
// Insertion O(log n)
// Searching O(log n)
// As the number of Nodes double you increase 1 step
// 2x # of nodes: 1 xtra step
// 4x # of nodes: 2x steps
// 8x # of nodes: 3x steps
// When a BST is completely one sided it will be O(n)
// BST is not good at one sided
// Worst case is: O(n) but it is not common

//// Use Cases for Trees
// HTML DOM (Document Object Model)
// Network Routing: i.e. Shortest Path
// Abstract Syntax Tree
// Artificial Intelligence:
//   Tic Tac Toe
//   Decision tree
// Folder Structure on Computer

//// Types of Trees

// BST:
// Can only have 2 Children per Node
// BST is a great way to store data that can compared
// or
// kept in an order
// Ex. Left is always less than the parent.
//     Right is always greater than the parent.
//              10
//             /  \
//            8    12
//           / \   / \
//          6   9 11  15

// BST Implementation
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      var current = this.root;

      while (true) {
        // You can ignore if we have duplicates
        // or
        // Count the amount of duplicates we have per node
        // I choose to ignore it
        if (val === current.value) return undefined;

        // If less than current
        if (val < current.value) {
          // Check if node is null
          if (current.left === null) {
            current.left = newNode;
            return this;

            // Node is not null
          } else {
            // Update current node
            current = current.left;
          }
        }

        // If greater than current
        if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (val === current.value) return true;

      // If less than current
      if (val < current.value) {
        // Update current node
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }
}

// This is how we insert if we had no functions
// in the BST class
/*
var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(8);
tree.root.right = new Node(12);
tree.root.left.right = new Node(9);
*/
