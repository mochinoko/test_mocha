var textManipulator = {}

textManipulator.checkTheDataType = function(argument) {
  // var argumentType = typeof argument

  if(argument === null) {
    return 'null';
  }

  if(argument === undefined) {
    return 'need an argument';
  }

  return typeof argument;
}

//Reurn the longest word of a given text name
textManipulator.longestWord = function(text) {
  if (typeof text != "string")
    return null;

  var textInArray = text.split(' ');
  var longest = textInArray[0];

  for (let i = 0; i < textInArray.length; i++) {
    if(textInArray[i].length >longest.length) {
      longest = textInArray[i];
    }
  }
  return longest;
}

textManipulator.howManyVowels = function(text) {
  if (typeof text != "string")
    return 0;
  var textInArray = text.split("");
  var vowels = ['a','e','o','u','i'];
  var vowelCount = 0;

  for (let i = 0; i < textInArray.length; i++) {
    if (vowels.includes(textInArray[i])) {
      vowelCount++
    }

    // for (let j = 0; j < vowels.length; j++) {
    //   if(textInArray[i] === vowels[j]) {
    //     vowelCount++;
    //   }
    // }

  }
  return vowelCount;
}


//
// textManipulator.howManyVowels = function(text) {
//   if(typeof text != "")
//   return 0;
// }

module.exports = textManipulator;
