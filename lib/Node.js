import Trie from '../lib/Trie';

class Node {
  constructor(data) {
    this.value = '';
    this.children = {};
    this.data = data || null;
    this.completedWord = false;
  }
}

module.exports = Node;