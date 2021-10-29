//practicamos con exports -
//metodo 1
// const utils = require("./utils"); 
// utils.carrito.forEach((c) => console.log(c));
// console.log(utils.suma(7, 9));

//metodo 2 - destructuración
const { carrito, suma } = require("./utils");
carrito.forEach((c) => console.log(c));
console.log(suma(7, 9));


