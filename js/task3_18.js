// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    if (this.potions.find(potion => potion.name === newPotion)) {
      return `Зелье ${potion.name} уже есть в инвентаре!`;
    }

    this.potions.push(newPotion);
    return this.getPotions();
  },
  removePotion(potionName) {
    const potionIndex = this.potions.findIndex(
      (potion, index) => potion.name === potionName,
    );

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.findIndex((potion, index, array) => {
      if (potion.name === oldName) {
        array[index].name = newName;
        return true;
      }
    });

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    // this.potions[potionIndex].name = newName;
  },
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.removePotion('Зелье скорости'));
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(
  atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'),
);
