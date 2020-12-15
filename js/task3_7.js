function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  const keys = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }

  // Пиши выше ниже этой строки
  return keys.length;
}
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
