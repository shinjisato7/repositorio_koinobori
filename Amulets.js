//Constructor
class Product {
  constructor(tipo, color, precio, carrito) {
    this.tipo = tipo;
    this.color = color;
    this.precio = precio;
    this.carrito = carrito;
  }
}
const red = new Product("daruma-rojo", " ", 250, 0);
const green = new Product("daruma-verde", " ", 260, 0);
const blue = new Product("daruma-azul", " ", 270, 0);
const black = new Product("daruma-negro", " ", 280, 0);
const lucky = new Product("omamori", "Suerte ", 150, 0);
const health = new Product("omamori", "Salud ", 150, 0);
const love = new Product("omamori", "Amor ", 150, 0);

$(".red").append(`<p class="item-price">$${red.precio}</p>`);
$(".blue").append(`<p class="item-price">$${blue.precio}</p>`);
$(".green").append(`<p class="item-price">$${green.precio}</p>`);
$(".black").append(`<p class="item-price">$${black.precio}</p>`);

const productos = [red, green, blue, black, lucky, health, love];

// for (const producto of Productos) {
//   console.log(producto.tipo);
//   console.log(producto.color);
//   console.log(producto.precio);
// }

// //Mensaje de bienvenida
// let nombre = prompt("Bienvenida a la tienda!\nIngrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// if (nombre == "" || apellido == "") {
//   alert("Nombre invalido, ingresar correctament");
//   let nombre = prompt("Ingrese su nombre");
//   let apellido = prompt("Ingrese su apellido");
// }

// funcion de agregado al carrito + mensaje alert
function amountDaruma(e) {
  e.preventDefault();
  let amount = e.target;
  // console.log(amount.children[2].value);
  // if (amount.children[2].value != 0) {
  //   alert(nombre + " " + apellido + "\n¡Has agregado " + amount.children[2].value + " unidades al carrito!");
  // }
}

// let cartDarumaRed = document.getElementById("cart_daruma-red");
// cartDarumaRed.addEventListener("submit", amountDaruma);

// let cartDarumaBlack = document.getElementById("cart_daruma-black");
// cartDarumaBlack.addEventListener("submit", amountDaruma);

// let cartDarumaGreen = document.getElementById("cart_daruma-green");
// cartDarumaGreen.addEventListener("submit", amountDaruma);

// let cartDarumaBlue = document.getElementById("cart_daruma-blue");
// cartDarumaBlue.addEventListener("submit", amountDaruma);

//Declaramos la url que vamos a usar para el GET
// const URLGET = "https://jsonplaceholder.typicode.com/posts";
// //Declaramos la información a enviar
// const datosCarrito = "info carrito";

// $("#buyProduct").click(() => {
//   $.post(URLGET, datosCarrito, (respuesta, estado) => {
//     if (estado === "success") {
//       alert("compra exitosa");
//     }
//   });
// });

// //Carrito

let addCartBtn = document.querySelectorAll(".addCartBtn");

for (let i = 0; i < addCartBtn.length; i++) {
  addCartBtn[i].addEventListener("click", () => {
    cartNumbers(productos[i]);
    costoTotal(productos[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart-number").textContent = productNumbers;
  }
}

function cartNumbers(productos) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart-number").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-number").textContent = 1;
  }

  listarItems(productos);
}

function listarItems(productos) {
  let itemsCarrito = localStorage.getItem("productosEnCarrito");
  itemsCarrito = JSON.parse(itemsCarrito);

  if (itemsCarrito != null) {
    if (itemsCarrito[productos.tipo] == undefined) {
      itemsCarrito = { ...itemsCarrito, [productos.tipo]: productos };
    }
    itemsCarrito[productos.tipo].carrito += 1;
  } else {
    productos.carrito = 1;
    itemsCarrito = {
      [productos.tipo]: productos,
    };
  }

  localStorage.setItem("productosEnCarrito", JSON.stringify(itemsCarrito));
}

function costoTotal(productos) {
  let costoCarrito = localStorage.getItem("costoTotal");

  console.log("adasd", costoCarrito);
  console.log(typeof costoCarrito);

  if (costoCarrito != null) {
    costoCarrito = parseInt(costoCarrito);
    localStorage.setItem("costoTotal", costoCarrito + productos.precio);
  } else {
    localStorage.setItem("costoTotal", productos.precio);
  }
}

function displayCart() {
  let itemsCarrito = localStorage.getItem("productosEnCarrito");
  itemsCarrito = JSON.parse(itemsCarrito);
  let productContainer = document.querySelector(".products-container");

  if (itemsCarrito && productContainer) {
    productContainer.innerHTML = "";
    Object.values(itemsCarrito).map((item) => {
      productContainer.innerHTML += `
      <div class="product"> 
        <img src="./imagenes/${item.tipo}.png">
        <span>${item.color}</span>
      </div>
      `;
    });
  }
}

onLoadCartNumbers();
displayCart();

// function cartNumbers(e) {
//   const button = e.target;
//   const item = button.closest(".card-item");
//   const itemTitle = item.querySelector(".card-title").textContent;
//   const itemPrice = item.querySelector(".price_amulet").textContent;
//   addCartItemFunction(itemTitle, itemPrice);
// }

// function addCartItemFunction(itemTitle, itemPrice) {
//   console.log(itemTitle, itemPrice);
// }

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
