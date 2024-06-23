function calcularPesoIdeal() {
   
    let altura = parseFloat(document.getElementById('altura').value);

    
    let sexo = document.getElementById('sexo').value;

   
    if (isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma altura válida.';
        return;
    }

    let pesoIdeal = 0;

    
    if (sexo === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, selecione um sexo válido.';
        return;
    }

   
    document.getElementById('resultado').innerHTML = `
        <p>Altura: ${altura.toFixed(2)} m</p>
        <p>Sexo: ${sexo.charAt(0).toUpperCase() + sexo.slice(1)}</p>
        <p>Peso Ideal: ${pesoIdeal.toFixed(2)} kg</p>
    `;
}