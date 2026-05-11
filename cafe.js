export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `${this.name} is located in ${this.location}`;
  }

  orderDrink(drink) {
    drink.orderDrink();

    drink.prepare();
    drink.serve();
  }
}