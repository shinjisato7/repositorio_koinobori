let nombre = prompt("Bienvenida a la tienda!\nIngrese su nombre");
let apellido = prompt("Ingrese su apellido");
if (nombre == "" || apellido == "") {
  alert("Nombre invalido, ingresar correctament");
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
}

let cartDarumaRed = document.getElementById("cart_daruma-red");
cartDarumaRed.addEventListener("submit", amountDarumaRed);

function amountDarumaRed(e) {
  e.preventDefault();
  let amount = e.target;
  console.log(amount.children[2].value);
  alert(nombre + " " + apellido + "\n¡Has agregado " + amount.children[2].value + " unidades al carrito!");
}

const amount = document.getElementById("amount").value;

let cartDarumaBlue = document.getElementById("cart_daruma-blue");
cartDarumaBlue.addEventListener("submit", amountDarumaBlue);

function amountDarumaBlue(e) {
  e.preventDefault();
  let amount = e.target;
  console.log(amount.children[2].value);
  alert(nombre + " " + apellido + "\n¡Has agregado " + amount.children[2].value + " unidades al carrito!");
}

let cartDarumaBlack = document.getElementById("cart_daruma-black");
cartDarumaBlack.addEventListener("submit", amountDarumaBlack);

function amountDarumaBlack(e) {
  e.preventDefault();
  let amount = e.target;
  console.log(amount.children[2].value);
  alert(nombre + " " + apellido + "\n¡Has agregado " + amount.children[2].value + " unidades al carrito!");
}

let cartDarumaGreen = document.getElementById("cart_daruma-green");
cartDarumaGreen.addEventListener("submit", amountDarumaGreen);

function amountDarumaGreen(e) {
  e.preventDefault();
  let amount = e.target;
  console.log(amount.children[2].value);
  alert(nombre + " " + apellido + "\n¡Has agregado " + amount.children[2].value + " unidades al carrito!");
}

class Amuletos {
  constructor(tipo, color, tamaño, precio, stock) {
    this.tipo = tipo;
    this.color = color;
    this.tamaño = tamaño;
    this.precio = precio;
    this.stock = stock;
  }
}

const darumaRojo = new Amuletos("Daruma: ", "Rojo ", "Mediano ", 200, " stock: 15");
const darumaVerde = new Amuletos("Daruma: ", "Verde ", "Mediano ", 200, " stock: 10");
const darumaAzul = new Amuletos("Daruma: ", "Azul ", "Mediano ", 200, " stock: 8");

const omamoriSuerte = new Amuletos("Omamori: ", "Suerte ", "Pequeño ", 150, " stock: 20");
const omamoriSalud = new Amuletos("Omamori: ", "Salud ", "Pequeño ", 150, " stock: 17");
const omamoriAmor = new Amuletos("Omamori: ", "Amor ", "Pequeño ", 150, " stock: 13");

// const pedidoProducto = [];
// const pedidoDaruma = [];
// const pedidoOmamori = [];
// let cantidad = 2;

// const pedidos = [
//   { nombre: "Maria", producto: "daruma", tipo: "rojo", cantidad: 5 },
//   { nombre: "Juan", producto: "omamori", tipo: "salud", cantidad: 2 },
//   { nombre: "Pedro", producto: "grulla", tipo: "cian", cantidad: 4 },
//   { nombre: "Jose", producto: "daruma", tipo: "azul", cantidad: 7 },
//   { nombre: "Sofia", producto: "grulla", tipo: "amarillo", cantidad: 10 },
//   { nombre: "Viviana", producto: "grulla", tipo: "naranja", cantidad: 1 },
// ];
// const tipoDaruma = (producto) => producto.producto == "daruma";
// const tipoGrulla = (producto) => producto.producto == "grulla";
// const tipoOmamori = (producto) => producto.producto == "omamori";

// const pedidosDaruma = pedidos.filter(tipoDaruma);
// const pedidosGrulla = pedidos.filter(tipoGrulla);
// const pedidosOmamori = pedidos.filter(tipoOmamori);

// console.log(pedidosDaruma);
// console.log(pedidosGrulla);
// console.log(pedidosOmamori)

// // function costoFlete() {
// //   if (precioProducto < 100) {
// //     return 80;
// //   } else if (precioProducto < 150) {
// //     return 60;
// //   } else if (precioProducto < 200) {
// //     return 40;
// //   } else {
// //     return 0;
// //   }
// }
// let flete = costoFlete();
// let costoIva = precioProducto * 0.21;

// function precio() {
//   let sumatoriaTotal = precioProducto + flete + costoIva;
//   let precioFinal = "Precio Final: $" + sumatoriaTotal;
//   alert("Detalles:\n" + "Precio bruto del producto: $" + precioProducto + "\n" + "Costo del flete: $" + costoFlete() + "\n" + "Iva del producto: $" + costoIva);
//   alert(precioFinal);
// }
