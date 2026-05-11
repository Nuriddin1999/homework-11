import { Drink } from "./drink.js";

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, hasGas) {
    super(name, size, price, temperature);
    this.hasGas = hasGas;
  }

  #makeDrink() {
    console.log(`smeshivayem s vodoy i poluchayem ${this.name}`);
  }

    prepare() {
    this.#makeDrink();
  }
}

export class Tea extends Drink {
  #makeDrink() {
    console.log(`zavarivayu listya i poluchayem ${this.name}`);
  }

  prepare() {
    this.#makeDrink();
  }
}

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType, sugurLevel) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
    this.sugurLevel = sugurLevel;
  }

  #makeDrink() {
    console.log(`zavarivayu zyorna i poluchayem ${this.name}`);
  }

    prepare() {
    this.#makeDrink();
  }
}