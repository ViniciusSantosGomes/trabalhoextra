function calcularCredito() {
    
    let saldoMedio = parseFloat(document.getElementById('saldoMedio').value);

   
    if (isNaN(saldoMedio) || saldoMedio < 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um saldo médio válido.';
        return;
    }

    
    let percentualCredito = 0;

    
    if (saldoMedio >= 0 && saldoMedio <= 200) {
        percentualCredito = 0;
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        percentualCredito = 20;
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        percentualCredito = 30;
    } else if (saldoMedio > 600) {
        percentualCredito = 40;
    }

    
    let valorCredito = saldoMedio * percentualCredito / 100;

    
    document.getElementById('resultado').innerHTML = `
        <p>Saldo Médio: R$ ${saldoMedio.toFixed(2)}</p>
        <p>Percentual de Crédito: ${percentualCredito}%</p>
        <p>Valor do Crédito: R$ ${valorCredito.toFixed(2)}</p>
    `;
}