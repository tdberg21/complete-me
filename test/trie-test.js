import { assert } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';

describe('TRIE', () => {
  let node;
  let tree;

  beforeEach(() => {
    node = new Node();
    tree = new Trie();
  });

  it('should return true', () => {
    assert.equal(true, true);
  });

  it('should be a function', () => {
    assert.isFunction(Trie);
  });
  
  it('should create a new Trie', () => {
    insert('apple'); 

    assert.isObject(node);
  });
  
});