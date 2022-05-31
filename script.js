let mercadoria = document.getElementById("goods");
let unidades = document.getElementById("goods-numbers");
let operacao = document.getElementById("movement");
let valor = document.getElementById("buy-value");

function addRow() {
    let getTable = document.getElementById('table-cnt');

    if(mercadoria.value == '' || unidades.value <= 0 || valor.value <= 0){
        alert("Dados inválidos!");
        return;
    }

    let rowCount = getTable.rows.length;
    let row = getTable.insertRow(rowCount);

    let cell4 = row.insertCell(0);
    cell4.innerText = valor.value;

    let cell3 = row.insertCell(0);
    cell3.innerText = operacao.value;

    let cell2 = row.insertCell(0);
    cell2.innerText = unidades.value;

    let cell1 = row.insertCell(0);
    cell1.innerText = mercadoria.value;
}
function printDiv() {
  mercadoria = "";
  unidades = "";
  valor = "";
  var printContents = document.getElementById("pdf").innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}