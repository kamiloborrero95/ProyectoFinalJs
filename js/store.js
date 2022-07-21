//mostrar y ocultar carrito
let mostrarCarrito = document.querySelector(".carrito");
let ocultarCarrito = document.querySelector(".cerrar-btn");
mostrarCarrito.onmouseover = function (event) {
  document.getElementById("productos-id").style.display = "block";
};
ocultarCarrito.onclick = function (event) {
  document.getElementById("productos-id").style.display = "none";
};

// variables
let allContainerCart = document.querySelector(".productos");
let contenedorComprarProducto = document.querySelector(".card-items");
let precioTotal = document.querySelector(".precioTotal");
let conteoProducto = document.querySelector(".contarProducto");

let comprarCosas = [];
let totalCard = 0;
let contarProductos = 0;

// funciones

//eventos
cargarListeners();
function cargarListeners() {
  allContainerCart.onclick = agregarProducto;

  contenedorComprarProducto.onclick = borrarProducto;
}

//agregar y borrar productos al carrito
function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-add-cart")) {
    const seleccionarProducto = e.target.parentElement;
    leerContenido(seleccionarProducto);
  }
}

function borrarProducto(e) {
  if (e.target.classList.contains("borrarProducto")) {
    const borrarId = e.target.getAttribute("data-id");
    comprarCosas.forEach((value) => {
      if (value.id == borrarId) {
        let precioReducido =
          parseFloat(value.precio) * parseFloat(value.cantidad);
        totalCard = totalCard - precioReducido;
        totalCard = totalCard.toFixed(2);
      }
    });
    comprarCosas = comprarCosas.filter((product) => product.id !== borrarId);
    contarProductos--;
    if (contarProductos === 0) {
      conteoProducto.innerHTML = 0;
      precioTotal.innerHTML = 0;
    }
  }
  cargarHTML();
}

// costo productos y contenido

function leerContenido(product) {
  const infoProducto = {
    imagen: product.querySelector("div img").src,
    titulo: product.querySelector(".titulo").textContent,
    precio: product.querySelector("div p span").textContent,
    id: product.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  totalCard = parseFloat(totalCard) + parseFloat(infoProducto.precio);
  totalCard = totalCard.toFixed(2);

  const existe = comprarCosas.some((product) => product.id === infoProducto.id);
  if (existe) {
    const prod = comprarCosas.map((product) => {
      if (product.id === infoProducto.id) {
        product.cantidad++;
        return product;
      } else {
        return product;
      }
    });

    comprarCosas = [...prod];
  } else {
    comprarCosas = [...comprarCosas, infoProducto];
    contarProductos++;
  }
  cargarHTML();
}

// productos agregados al carrito en ventana emergente
function cargarHTML() {
  clearHTML();
  comprarCosas.forEach((producto) => {
    const { imagen, titulo, precio, cantidad, id } = producto;
    const row = document.createElement("div");
    row.classList.add("item");
    row.innerHTML = `
            <img src="${imagen}" alt="">
            <div class="item-content">
                <h5>${titulo}</h5>
                <h5 class="cart-price">$${precio}</h5>
                <h6>Cantidad: ${cantidad}</h6>
            </div>
            <span class="borrarProducto" data-id="${id}">X</span>
        `;
    contenedorComprarProducto.appendChild(row);

    precioTotal.innerHTML = totalCard;

    conteoProducto.innerHTML = contarProductos;
    //Local Storage
    let nuevoStorage = JSON.stringify(comprarCosas);
    localStorage.setItem("productos", nuevoStorage);
  });
}

function clearHTML() {
  contenedorComprarProducto.innerHTML = "";
  localStorage.removeItem("productos");
}
