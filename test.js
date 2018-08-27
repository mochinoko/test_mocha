var assert = require('assert');
var textManipulator = require('../app.js');


describe('checkTheDataType', function() {
  it('Should return number when given a number as argument', function() {
    assert.equal('number', textManipulator.checkTheDataType(42));
  });
  it('Should return null when given null as argument', function() {
    assert.equal('null', textManipulator.checkTheDataType(null));
  });
  it('Should return an error if not given an argument', function() {
    assert.equal('need an argument', textManipulator.checkTheDataType());
  });


});

describe('longestWord', function() {
  it('Should return "jumped" when given following text as a parameter', function() {
    assert.equal("jumped", textManipulator.longestWord('The quick brown fox  jumped over the lazy dog.'));
  });

  it('Should return a really long word', function() {
    assert.equal('otrohinolaryngology', textManipulator.longestWord('What if we try a super-long word such as otrohinolaryngology'));
  });
  it('Should return the longest number if given number is in text as parameter', function() {
    assert.equal('923798', textManipulator.longestWord('30 2000 75 923798'));
  });
  it('Should return null if the parameter is not in text', function() {
    assert.equal(null, textManipulator.longestWord(3000));
  });
});

  describe('howManyVowels', function() {
    it('Should return 3 when given a word with 3 vowels', function() {
      assert.equal(3, textManipulator.howManyVowels('dooog'));
    });
    it('Should return 0 when given a word with 0 vowels', function() {
      assert.equal(0, textManipulator.howManyVowels('d'));
      assert.equal(0, textManipulator.howManyVowels('dplkjhgfmnbcxz'));
    });
    it('Should return 0 when given an empty string', function() {
      assert.equal(0, textManipulator.howManyVowels(''));
    });
    it('Should return 0 when given any other data type.', function() {
      assert.equal(0, textManipulator.howManyVowels(57));
      assert.equal(0, textManipulator.howManyVowels(null));
      assert.equal(0, textManipulator.howManyVowels(undefined));
    });
});
