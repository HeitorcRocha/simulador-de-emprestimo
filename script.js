const form = document.getElementById("form-simulador");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valor = Number(document.getElementById("valor").value);
  const parcelas = Number(document.getElementById("parcelas").value);

  if (valor <= 0 || parcelas <= 0) {
    resultado.textContent = "Informe valores maiores que zero.";
    return;
  }

    const valorParcela = valor / parcelas;

  resultado.textContent = `${parcelas}x de R$ ${valorParcela.toFixed(2)}`;
});