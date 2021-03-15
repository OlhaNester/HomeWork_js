// const x = 1;
// const x = 'hello';
// console.log(x);
// ========================================================
// let b = 20;

// if (true) {
  
//     console.log(b);
//      let b = 10; 
// }
// ==========================================================

// const x;
// x = 1;
// console.log(x);
// =========================================================


// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//     let sum = amount;
    
// }
// console.log(sum);
// ============================================================

// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function(callback) {
//   callback();
// };

// foo(person.showName);
// =============================================================


// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function(newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//  cb(20);
// }

// person.refreshAge();
// console.log(person.age);

// ======================================================================
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);
// ===================================================================
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);