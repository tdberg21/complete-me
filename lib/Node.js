export default class Node {
  constructor(data) {
    this.children = {};
    this.data = data || null;
    this.completedWord = null;
  }
}

