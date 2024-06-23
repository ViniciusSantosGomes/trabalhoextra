function ordenarValores() {
    
    let valor1 = parseInt(document.getElementById('valor1').value, 10);
    let valor2 = parseInt(document.getElementById('valor2').value, 10);
    let valor3 = parseInt(document.getElementById('valor3').value, 10);
    let valor4 = parseInt(document.getElementById('valor4').value, 10);
    let valor5 = parseInt(document.getElementById('valor5').value, 10);

    
    let valores = [valor1, valor2, valor3, valor4, valor5];

    
    let valoresUnicos = new Set(valores);
    if (valoresUnicos.size !== 5) {
        document.getElementById('resultado').innerHTML = 'Os valores devem ser inteiros e diferentes.';
        return;
    }

    valores.sort(function(a, b) { return b - a; });

   
    document.getElementById('resultado').innerHTML = `
        <p>Valores em ordem decrescente: ${valores.join(', ')}</p>
    `;
}