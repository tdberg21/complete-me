import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';

describe('TRIE', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should instantiate a new Trie', () => {
    const expected = {
      count: 0,
      suggestionArray: [],
      root: {
        children: {},
        data: null,
        completedWord: null
      }
    };
    const actual = trie;

    assert.deepEqual(actual, expected);
  });


  describe('INSERT', () => {
    
    it('should add a node to the tree', () => {
      trie.insert('d');
      assert.equal(Object.keys(trie.root.children)[0], 'd');
    });
    
    it('should add multiple nodes to the tree', () => {

    }
    )
    
  });

  describe('SUGGEST', () => {

    it('should suggest words based on the prefix', () => {
      let trie = new Trie();

      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');

      trie.suggest('do');
      console.log(JSON.stringify(trie, null, 4));

      assert.deepEqual(trie.suggestionArray, ['dog', 'double', 'door']);
    });


  });

});