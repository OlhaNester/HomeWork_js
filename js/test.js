// const x = 1;
// const x = 'hello';
// console.log(x);
// ========================================================
// let b = 20;

// if (true) {
<<<<<<< HEAD
//   console.log(b);
//   let b = 10;
// }

=======
  
//     console.log(b);
//      let b = 10; 
// }
>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
// ==========================================================

// const x;
// x = 1;
// console.log(x);
// =========================================================

<<<<<<< HEAD
=======

>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
<<<<<<< HEAD
//   let sum = amount;
=======
//     let sum = amount;
    
>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
// }
// console.log(sum);
// ============================================================

// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

<<<<<<< HEAD
// const foo = function (callback) {
//   callback();
// };

// foo(person.showName.bind(person));
// =============================================================

=======
// const foo = function(callback) {
//   callback();
// };

// foo(person.showName);
// =============================================================


>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
<<<<<<< HEAD
//     fetchAgeFromDb(function (newAge) {
=======
//     fetchAgeFromDb(function(newAge) {
>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
<<<<<<< HEAD
//   cb(20);
=======
//  cb(20);
>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
// }

// person.refreshAge();

// console.log(person.age);

// ======================================================================
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);
// ===================================================================
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 60ca7a75e66d98e991df4448293a7ff36ef5c4b0
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

<<<<<<< HEAD
// ======================================================================
const multiplyByValue = (value, base, ...numbers) => {
  return numbers.map(number => number * value + base);
};
console.log(multiplyByValue(2, 100, 1, 5, 20, 10));
=======
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);
>>>>>>> f1538535c68feecab97e158857a0a5b12d119c5f
=======
// =============================================================================
// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);

// ==============================================================================
// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);

// ================================================================================
// const name = 'bob';
// const age = 20;
// const obj = { name, age };

// console.log(obj);

// =========================================================================
// const confused = 'no';
// const myKey = confused;

// const obj = {
//   ['myKey']: false,
// };

// console.log(obj);


// ===========================================================================
// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);


// =================================================================================
// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);

// =================================================================================
// const { name, age, gender = 'm', hairColor: color } = {
//  name: 'bob',
//  age: 20,
//  hairColor: 'blue',
// };

// console.log(name, age, gender, color);

// ===================================================================================

// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();

// =======================================================================================

// const userA = {
//   name: 'Mango',
//   age: 5,
// };

// const userB = {
//   ...userA,
//   age: 10,
//   happy: true,
// };

// console.log(userB);

// ==============================================================================================

// const fn = (arr, val) => arr.filter(el => el > val);

// console.log(fn([1, 2, 3, 4, 5], 3));



// ==============================================================================

const fn = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
 });

console.log(fn(['html', 'css', 'js', 'react']));
>>>>>>> 60ca7a75e66d98e991df4448293a7ff36ef5c4b0
