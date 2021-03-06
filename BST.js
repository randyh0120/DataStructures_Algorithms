// This is built off of the BST

// BST Implementation
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // Breath First Search
  BFS() {
    var node = this.root,
      data = [],
      queue = [];

    queue.push(node);

    // when .length returns 0 then it is false
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Depth First Search
  // Pre Order
  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      // Push before Traversing
      data.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  // Depth First Search
  // Post Order
  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      // Traverse before Pushing
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  // Depth First Search
  // In Order
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      // Traverse both before Pushing
      if (node.left) traverse(node.left);

      data.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

/*
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();
*/
