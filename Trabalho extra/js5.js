function calcularAumento() {
    
    let salario = parseFloat(document.getElementById('salario').value);

    
    let codigoCargo = document.getElementById('codigoCargo').value;

    
    if ((salario) || salario <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira um salário válido.';
        return;
    }

    
    let percentualAumento = 0;

    
    if (codigoCargo === '101') {
        percentualAumento = 10; 
    } else if (codigoCargo === '102') {
        percentualAumento = 20; 
    } else if (codigoCargo === '103') {
        percentualAumento = 30; 
    } else {
        percentualAumento = 40; 
    }

    
    let novoSalario = salario + (salario * percentualAumento / 100);
    let diferenca = novoSalario - salario;

    
    document.getElementById('resultado').innerHTML = `
        <p>Salário Antigo: R$ ${salario.toFixed(2)}</p>
        <p>Novo Salário: R$ ${novoSalario.toFixed(2)}</p>
        <p>Diferença: R$ ${diferenca.toFixed(2)}</p>
    `;
}