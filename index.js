import { Lemonade, Coffee, Tea } from "./liquids.js";
import { Cafe } from "./cafe.js";

const cafe = new Cafe('Cafe', 'Bukhara')
const tea = new Tea('Ahmad', 20, 10, 30)

cafe.orderDrink(tea)
console.log(cafe.getInfo())