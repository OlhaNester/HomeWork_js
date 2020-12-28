//Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

//Добавь методы класса:

//getItems() - возвращает массив текущих товаров
//addItem(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// Write code under this line
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return goods;
  }

  addItem(item) {
    this.items.push(item);
<<<<<<< HEAD
  }
  removeItem(item) {
    this.items = this.items.filter(item => item !== itemName);
=======
    // return this.items;
  }

  removeItem(item) {
    //this.items = this.items.filter(item => item !== itemName);
    for (let i = this.items.length; i--; ) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);
        return this.items;
      }
    }
>>>>>>> a8e7d66f3f19c6ecc6be3acc8ba11cf34e3b00f8
  }
}

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
