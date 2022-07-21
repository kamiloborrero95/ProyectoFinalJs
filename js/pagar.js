let comprarCosas = JSON.parse(localStorage.getItem("productos"));
const pagoFinal = document.getElementById("pagoFinal");
const subTotales = document.getElementsByClassName("subtotales"); // Para luego sumarlos en el total a pagar

for (let i = 0; i < comprarCosas.length; i++) {
  let subTotal = comprarCosas[i].precio * comprarCosas[i].cantidad; // Para luego sumarlos en el total a pagar
  const contenedorMayor = document.getElementById("tbody");
  const row = document.createElement("tr");
  contenedorMayor.appendChild(row);
  row.innerHTML = `
    <td><img src="${comprarCosas[i].imagen}" alt="" class="imagenCompra"></td>
    <td><h3>${comprarCosas[i].titulo}</h3></td>
    <td><h3>${comprarCosas[i].precio}</h3></td>
    <td><h3>${comprarCosas[i].cantidad}</h3></td>
    <td><h3 class="subtotales">${subTotal}</h3></td>
    `;
}
