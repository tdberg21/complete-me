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
    
    it('should add nodes to the tree', () => {
      trie.insert('dogs');
      expect(Object.keys(trie.root.children)[0]).to.equal('d');
    })
    
  });

  describe('SUGGEST', () => {

    it('should suggest words based on the prefix', () => {
      let trie = new Trie();

      trie.insert('dog');
      trie.insert('double');
      trie.insert('door');

      trie.suggest('do');
      console.log(JSON.stringify(trie, null, 4));

      expect(trie.suggestionArray).to.deep.equal(['dog', 'double', 'door']);
    });
    
  });

});