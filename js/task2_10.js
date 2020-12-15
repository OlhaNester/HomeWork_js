function findLongestWord(string) {
  // Пиши код ниже этой строки
  if (typeof string === 'undefined') {
    return '';
  }
  let Arr;
  Arr = string.split(' ');
  let result = '';

  for (let i = 0; i < Arr.length; i += 1) {
    if (result.length < Arr[i].length) {
      result = Arr[i];
    }
  }

  return result;
  // Пиши код выше этой строки
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
console.log(findLongestWord());
