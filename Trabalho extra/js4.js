function calcular() {
    var ano = document.getElementById('ano').value;
    var valor = document.getElementById('valor').value;
    var taxa;
    if (ano < 1990) {
      taxa = 0.01;
    } else {
      taxa = 0.015;
    }
    var imposto = valor * taxa;

    document.getElementById('resultado').innerText = "Imposto a ser pago: R$ " + imposto.toFixed(2);
  }