// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//     которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена умноженная на количество).

// function calculateTotalPrice(allProdcuts, productName) {
//   'use strict';
//   // Write code under this line
//   let result = 0;
//   for (let i = 0; i < allProdcuts.length; i += 1) {
//     if (allProdcuts[i].name === productName) {
//       result += allProdcuts[i].price * allProdcuts[i].quantity;
//     }
//   }
//   return result;
// }

// //Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
function calculateTotalPrice(array, prop) {
  'use strict';
  // Write code under this line
  let result = 0;
  for (const obj of array) {
    if (prop !== obj.name) {
      continue;
    }
    result += obj.price * obj.quantity;
  }
  return result;
  console.log(result);
}

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800

console.log(calculateTotalPrice([]));
