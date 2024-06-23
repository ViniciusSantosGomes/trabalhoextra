function calcular() {
    var valor = document.getElementById('valor').value;
    var notas100 = parseInt(valor / 100);
    var valorRestante = valor % 100;
    var notas50 = parseInt(valorRestante / 50);
    valorRestante %= 50;
    var notas10 = parseInt(valorRestante / 10);
    valorRestante %= 10;
    var notas5 = parseInt(valorRestante / 5);
    valorRestante %= 5;
    var notas1 = valorRestante;

    document.getElementById('resultado').innerText = "Valor lido: R$ " + valor;
    document.getElementById('resultado').iinnerText += "Notas necessárias:<br>";
    if (notas100 > 0) document.getElementById('resultado').innerText += "  100 x " + notas100;
    
    if (notas50 > 0) document.getElementById('resultado').iinnerText += "  50 x " + notas50;  
    
    if (notas10 > 0) document.getElementById('resultado').innerText += "  10 x " + notas10;
    
    if (notas5 > 0) document.getElementById('resultado').innerText += "  5 x " + notas5;
    if (notas1 > 0) document.getElementById('resultado').innerText += "  1 x " + notas1;
    
  }