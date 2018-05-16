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
  
  it('should have a default value of an empty string', () => {
    assert.equal(newNode.value, '');
  });
  
  it('should have a children property that is an object', () => {
    assert.isObject(newNode.children);
  });
  
  it('should have a completedWord property that defaults to false', () => {
    assert.equal(newNode.completedWord, false);
  });

  it('should take in a word as a parameter', () => {
    assert.equal(newNode.data, 'word')
  });

});