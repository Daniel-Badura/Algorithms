class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class BinarySearchTree:
    def __init__(self):
        self.root = None

    # Recursive Function
    def insert(self, value):
        def insert_node(next_node, cur_node):
            if cur_node is None:
                return next_node
            if next_node.value <= cur_node.value:
                cur_node.left = insert_node(next_node, cur_node.left)
            else:
                cur_node.right = insert_node(next_node, cur_node.right)
            return cur_node

        next_node = Node(value)
        self.root = insert_node(next_node, self.root)

    # Recursive While Loop
    def lookup(self, value):
        current_node = self.root

        while current_node:
            if value == current_node.value:
                return current_node
            elif value < current_node.value:
                # Go left
                current_node = current_node.left
            else:
                # Go right
                current_node = current_node.right

        return None  # Value not found
    def breadthSearchFirst(self, value):
        current_node = self.root
        list = []
        queue = []
        queue.append(current_node)
        while len(queue) > 0:
            current_node = queue.pop(0)
            list.append(current_node.value)
            if current_node.value == value:
                return current_node.value
            if current_node.left:
                queue.append(current_node.left)
            if current_node.right:
                queue.append(current_node.right)
        return list
    
    def breadthSearchFirstRecursive(self, queue, value_list):
        if not queue:
            return value_list

        current_node = queue.pop(0)
        value_list.append(current_node.value)

        if current_node.left:
            queue.append(current_node.left)
        if current_node.right:
            queue.append(current_node.right)

        return self.breadthSearchFirstRecursive(queue, value_list)


def traverse(node):
    if node is None:
        return None
    tree = {"value": node.value}
    tree["left"] = traverse(node.left)
    tree["right"] = traverse(node.right)
    return tree


tree = BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
print(tree.breadthSearchFirst(2))
print(tree.breadthSearchFirst(9))
print(tree.breadthSearchFirstRecursive([tree.root], [] ))


import json
# print(json.dumps(traverse(tree.root), indent=2))
