// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
//     значение которого это чётное число, добавляя к нему значение параметра value.

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i] + value);
    } else result.push(numbers[i]);
  }
  return result;
  // Пиши код выше этой строки
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
