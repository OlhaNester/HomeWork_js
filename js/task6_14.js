// Дополни функцию calculateTotalBalance(users) так, чтобы она считала
// и возвращала сумму всех средств(свойство balance) которые хранят
// пользователи из массива users.

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и
// возвращала общее количество друзей(свойство friends) всех пользователей из массива users.
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//     total += user.balance;
//     return total;
//   }, 0);
// };
console.log(
  users.reduce((total, user) => {
    total += user.balance;
    return total;
  }, 0),
);

// const getTotalFriendCount = users =>
//   users.reduce((total, user) => {
//     total += user.friends.length;
//     return total;
//   }, 0);
// console.log(getTotalFriendCount(users));

// const getTotalFriendCount = users =>
//   users.reduce((total, user) => {
//     total.push(...user.friends);
//     return total;
//   }, []).length;

// console.log(getTotalFriendCount(users));

const getNamesSortedByFriendCount = users => {
  return [...users]
    .sort((first, second) => first.friends.length - second.friends.length)
    .map(({ name }) => name);
};
