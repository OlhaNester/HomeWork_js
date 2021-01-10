const guest = { name: 'Mango' };
const guest1 = { name: 'Poly' };
function greet() {
  console.log(`Добро пожаловать ${this.name}.`);
}
function greet1() {
  console.log(`Пока ${this.name}.`);
}
// Функция высшего порядка
function registerGuest(callback, callback2) {
  console.log(callback);
  console.log(callback2);
  console.log('Привет');
}

registerGuest(greet.call(guest), greet1.call(guest1));
//greet.call(guest);
