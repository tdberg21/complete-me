import Node from '../lib/Node';

export default class Trie {
  constructor() {
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
      let letter = array.shift();
      
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
    return this.suggestionArray;
  }

  populate(words) {
    words.forEach(word => this.insert(word));
  }

  contains(givenWord) {
    let currNode = this.root;
    let wordArray = [...givenWord.toLowerCase()];


    while (wordArray.length) {
      let letter = wordArray.shift();

      if (currNode.children[letter]) {
        currNode = currNode.children[letter];
      }
    }
    return (currNode.completedWord === givenWord); 
    
  }
}