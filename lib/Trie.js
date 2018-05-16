import Node from '../lib/Node';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }
  
  insert(data, node = this.root) {
    let currNode = this.root;
    const array = [...data];

    if (!currNode) {
      return null;
    }

    while (array.length) {
      let foo = array.shift(data);

      if (currNode.data === foo) {
        currNode = currNode.children;
      };
      currNode.children = new Node(foo);
      currNode = currNode.children;
    }
    currNode.completedWord = true;
    this.count();
  }
  
  count() {
    this.count ++;
    return this.count;
  }
  
  suggest() {
    
  }
};

