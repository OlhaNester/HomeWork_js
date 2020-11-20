const hotel = {
  name: 'Resort Hotel',
};

const showThis = function () {
  console.log(this);
};

const fn = function (vasia, petia) {
  /*
   * Во время вызова fn, callback будет ссылкой
   * на функцию showThis объекта hotel.
   * Ее вызов происходит в глобальном контексте,
   * про hotel она ничего не знает.
   * Соответственно this не будет ссылаться на hotel
   */
  vasia();
  console.log(petia);
};

// Передается ссылка на функцию а нее ее вызов
fn(showThis, 5); // window или undefined

hotel.hotelshowThis = showThis;
hotel.hotelshowThis();
