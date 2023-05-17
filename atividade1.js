let saldoInicial = parseFloat(prompt("Informe o saldo inicial da peça:"));
let continuar = 's';

while (continuar === 's') {
  let tipoEntrada = parseInt(prompt("Informe o tipo de entrada (1 para compra, 2 para venda):"));
  let quantidade = parseInt(prompt("Informe a quantidade de peças:"));

  if (tipoEntrada === 1) {
    saldoInicial += quantidade;
  } else if (tipoEntrada === 2) {
    if (quantidade <= saldoInicial) {
      saldoInicial -= quantidade;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  console.log("Saldo atual do estoque:", saldoInicial);

  continuar = prompt("Deseja continuar? (s/n)");
}

console.log("Sistema encerrado.");