import { assert } from 'chai';
import Node from '../lib/Node';

describe('NODE', function () {
  let newNode;

  beforeEach(() => {
    newNode = new Node('word');
  });

  it ('should instantiate our good friend Node', function() {
    assert.isObject(newNode);
  });
  
  it('should have a children property that is an object', () => {
    assert.isObject(newNode.children);
  });
  
  it('should have a completedWord property that defaults to null', () => {
    assert.equal(newNode.completedWord, null);
  });

  it('should take in a word as a parameter', () => {
    assert.equal(newNode.data, 'word')
  });

});