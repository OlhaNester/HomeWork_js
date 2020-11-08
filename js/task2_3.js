const findLongestWord = function (string = '') {
  // Write code under this line
  let stringarray;
  stringarray = string.split(' ');
  let result = '';
  for (let i = 0; i < stringarray.length; i += 1) {
    if (stringarray[i].length > result.length) {
      result = stringarray[i];
    }
  }
  return result;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
