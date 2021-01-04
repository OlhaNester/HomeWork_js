// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива
// произвольной длины в параметры firstArray и secondArray, и возвращает новый массив
// их общих элементов, то есть тех которые есть в обоих массивах.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (item, index) {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  });

  return commonElements;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
