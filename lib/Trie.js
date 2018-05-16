import Node from '../lib/Node';

export default class Trie {
  constructor(data) {
    this.root = new Node();
    this.count = 0;
    this.suggestionArray = [];
  }

  count() {
    return this.count;
  }
  
  insert(data) {
    let currNode = this.root;
    const array = [...data.toLowerCase()];

    if (!currNode) {
      return null;
    }

    while (array.length) {
      let letter = array.shift(data);

      if (!currNode.children[letter]) {
        currNode.children[letter] = new Node(letter);
      }
      currNode = currNode.children[letter];
    }
    currNode.completedWord = data.toLowerCase();
    this.count++;
  }
  
  
  
  suggest(prefix) {
    this.suggestionArray = [];
    let currentNode = this.root;
    let prefixArray = [...prefix.toLowerCase()];

    prefixArray.forEach(letter => {
      currentNode = currentNode.children[letter];
    });

    const searchWords = node => {
      if (node.completedWord) {
        this.suggestionArray.push(node.completedWord);
      }
    
      let objKeys = Object.keys(node.children);

      objKeys.forEach(key => {
        searchWords(node.children[key]);
      });
    };

    searchWords(currentNode);
    console.log(this.suggestionArray);
    return this.suggestionArray;
  }
};

