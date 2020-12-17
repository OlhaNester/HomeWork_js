function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код нижей этой строки

  const message = `Вы заказали дроидов на сумму ${
    orderedQuantity * pricePerDroid
  } кредитов. Доставка (${deliveryFee}) кредитов включена в сумму заказа.`;

  // Пиши код выше этой строки
  return message;
}
console.log(makeOrderMessage(2, 100, 50));
console.log(makeOrderMessage(4, 300, 100));
console.log(makeOrderMessage(10, 70, 200));
