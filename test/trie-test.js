import { assert } from 'chai';
import Trie from '../lib/Trie';
import fs from 'fs';
import { triggerAsyncId } from 'async_hooks';

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
      const actual = Object.keys(trie.root.children)[0];
      const expected = 'd';

      assert.equal(actual, expected);
    });
    
    it('should add multiple nodes to the tree', () => {
      trie.insert('dog');
      assert.equal(Object.keys(trie.root.children.d.children), 'o');
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
      assert.deepEqual(trie.suggestionArray, ['dog', 'double', 'door']);
    });
  });

  describe('POPULATE', () => {

    it.skip('should insert the dictionary', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      const completion = new Trie();

      completion.populate(dictionary);
      assert.equal(completion.count, 235886);
    });

    it('should suggest words from the dictionary', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      const completion = new Trie();

      completion.populate(dictionary);
      completion.suggest('pizz');

      assert.deepEqual(completion.suggestionArray, [ 'pizza', 'pizzeria', 'pizzicato', 'pizzle' ]);
    });
  });

  describe('CONTAINS', () => {
    it('should return true if the word exists in the trie', () => {
      let trie = new Trie();

      trie.insert('apple');
    
      assert.equal(trie.contains('apple'), true);
    });

    it('should return false if the word does not exist in the trie', () => {
      let trie = new Trie();

      trie.insert('apple');

      assert.equal(trie.contains('banana'), false);
    });
  });

});