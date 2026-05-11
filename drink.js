export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `This ${this.name} has size ${this.size} costs ${this.price} and its temperature is ${this.#temperature}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #makeDrink() {
    console.log(`Making ${this.name}...`);
  }

  orderDrink() {
    this.#makeDrink();
    console.log(`Order ${this.name} accepted`);
  }

  serve() {
    console.log(`${this.name} podano`);
  }
}