function calcularValor() {
    
    let codigoItem = document.getElementById('codigoItem').value;
    let quantidade = parseInt(document.getElementById('quantidade').value, 10);


    if ((quantidade) || quantidade <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma quantidade válida.';
        return;
    }

    
    let preco = 0;
    let itemNome = "";

    if (codigoItem === '1') {
        itemNome = "Cachorro Quente";
        preco = 11.00;
    } else if (codigoItem === '2') {
        itemNome = "Bauru";
        preco = 8.50;
    } else if (codigoItem === '3') {
        itemNome = "Misto Quente";
        preco = 8.00;
    } else if (codigoItem === '4') {
        itemNome = "Hamburguer";
        preco = 9.00;
    } else if (codigoItem === '5') {
        itemNome = "Cheeseburguer";
        preco = 10.00;
    } else if (codigoItem === '6') {
        itemNome = "Refrigerante";
        preco = 4.50;
    } else {
        document.getElementById('resultado').innerHTML = 'Código do item inválido.';
        return;
    }

    
    let valorTotal = preco * quantidade;

    
    document.getElementById('resultado').innerHTML = `
        <p>Item: ${itemNome}</p>
        <p>Quantidade: ${quantidade}</p>
        <p>Preço Unitário: R$ ${preco.toFixed(2)}</p>
        <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
    `;
}