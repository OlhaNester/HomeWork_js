function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};
Storage.prototype.removeItem = function (oldItem) {
  return (this.items = this.items.filter(item => item !== oldItem));
};

// const Storage = function (items) {
//   this.items = items;

//   this.getItems = function () {
//     return this.items;
//   };
//   this.addItem = function (newItem) {
//     this.items.push(newItem);
//   };
//   this.removeItem = function (oldItem) {
//     this.items = this.items.filter(item => item !== oldItem);
//   };
// };

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
