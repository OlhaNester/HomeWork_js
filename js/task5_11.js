const animal = { eats: false };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true
console.log(dog.eats); // true
