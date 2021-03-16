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
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

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
