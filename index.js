class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.root == null) {
      this.root = newNode;
      return
    }
    let temp = this.root;
    while (temp) {
      if (temp.value === newNode.value) {
        console.log("test")
        return undefined
      }
      if (newNode.value > temp.value) {
        if (temp.right) temp = temp.right
        else temp.right = newNode
      } else if (newNode.value < temp.value) {
        if (temp.left) temp = temp.left
        else temp.left = newNode
      }
    }
    temp = newNode;
    return this
  }
}
let myTree = new BST()
console.log(myTree)
myTree.insert(5)
myTree.insert(6)
myTree.insert(6)
myTree.insert(10)
console.log(myTree)



