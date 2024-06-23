function calcularValor() {
    
    let preco = parseFloat(document.getElementById('preco').value);

    
    let condicao = document.getElementById('condicao').value;

   
    if (isNaN(preco) || preco <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um preço válido.';
        return;
    }

   
    let valorFinal = preco;

    
    if (condicao === 'a') {
        valorFinal = preco * 0.90; 
    } else if (condicao === 'b') {
        valorFinal = preco * 0.85;
    } else if (condicao === 'c') {
        valorFinal = preco; 
    } else if (condicao === 'd') {
        valorFinal = preco * 1.10; 
    } else {
        document.getElementById('resultado').innerHTML = 'Condição de pagamento inválida.';
        return;
    }

    
    document.getElementById('resultado').innerHTML = `
        <p>Preço Normal: R$ ${preco.toFixed(2)}</p>
        <p>Condição de Pagamento: ${condicao.toUpperCase()}</p>
        <p>Valor a Ser Pago: R$ ${valorFinal.toFixed(2)}</p>
    `;
}