// Напиши функцию countTotalSalary(employees)
// принимающую объект зарплат.Функция считает
// общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  let sum = 0;
  for (const salary of values) {
    //проверка на пустой объект - функция возвращает 0
    if (salary.length === 0) {
      return (salary = null);
    }
    sum += salary;
  }
  return sum;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

const administration = {};
console.log(countTotalSalary(administration));
