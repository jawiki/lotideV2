const assertEqual = require ('./assertEqual');

const countLetters = function(data) {
  let results = {};
  let str = data.replace(' ', '');
  for (let char of str) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

module.exports = countLetters;
// console.log(countLetters("hello world"));