class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Recursive Function
  insert(value) {
    function insertNode(next, cur) {
      if (cur.value <= next.value) {
        if (!cur.right) {
          cur.right = next;
        } else {
          cur = cur.right;
          insertNode(next, cur);
        }
      } else {
        if (!cur.left) {
          cur.left = next;
        } else {
          cur = cur.left;
          insertNode(next, cur);
        }
      }
    }
    let nextNode = new Node(value);
    let curNode = this.root;
    if (this.root === null) {
      this.root = nextNode;
    } else {
      insertNode(nextNode, curNode);
    }
  }
  // Recursive While Loop
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        // Go left
        currentNode = currentNode.left;
      } else {
        // Go right
        currentNode = currentNode.right;
      }
    }
    return null; // Value not found
  }
  //BFS
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return breadthFirstSearchRecursive(queue, list);
  }

  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
