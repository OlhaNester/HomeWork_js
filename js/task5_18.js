class Car {
  brand;
  model;
  price;

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
new Car({ brand: 'Audi', model: 'Q3', price: 36000 });

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return (this.#brand = newBrand);
//   }
// }
