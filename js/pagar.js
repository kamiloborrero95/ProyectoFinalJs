let comprarCosas = JSON.parse(sessionStorage.getItem("productos"));
let pagoFinalValor = JSON.parse(sessionStorage.getItem("valorTotal"));
const pagoFinal = document.getElementById("pagoFinal");
pagoFinal.innerHTML = `$${pagoFinalValor}`;
const subTotales = document.getElementsByClassName("subtotales"); // Para luego sumarlos en el total a pagar

for (let i = 0; i < comprarCosas.length; i++) {
  const { imagen, titulo, precio, cantidad, id } = comprarCosas[i]; //desestructuracion
  const contenedorMayor = document.getElementById("tbody");
  const row = document.createElement("tr");
  contenedorMayor.appendChild(row);
  row.classList = `${id}`;
  row.innerHTML = `
    <td><img src="${imagen}" alt="" class="imagenCompra"></td>
    <td><h3>${titulo}</h3></td>
    <td><h3>${precio}</h3></td>
    <td><h3>${cantidad}</h3></td>
    <td><h3 class="subtotales"></h3></td>
    `;
}

btnPagar = document.getElementById("btnPago");
btnPagar.onclick = function (event) {
  Swal.fire({
    title: "¿Estas seguro de continuar?",
    text: "El pago sera registrado",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, estoy seguro!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pago realizado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

btnVolver = document.getElementById("btnVolver");
btnVolver.onclick = (event) => {
  Swal.fire({
    title: "¿Estas seguro de regresar?",
    text: "los productos se mantendran en el carrito",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, estoy seguro!",
    cancelButtontext: "no, continuar en facturacion",
  }).then((result) => {
    result.isConfirmed && location.assign("./store.html");
  });
};
