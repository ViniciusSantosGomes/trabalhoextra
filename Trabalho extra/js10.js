function calcularSalario() {
    
    let nivel = document.getElementById('nivel').value;

    
    let qtdAulas = parseFloat(document.getElementById('qtdAulas').value);

    
    if (isNaN(qtdAulas) || qtdAulas <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira uma quantidade de horas válida.';
        return;
    }

   
    let valorHoraAula = 0;

    if (nivel === '1') {
        valorHoraAula = 12.00;
    } else if (nivel === '2') {
        valorHoraAula = 17.00;
    } else if (nivel === '3') {
        valorHoraAula = 25.00;
    } else {
        document.getElementById('resultado').innerHTML = 'Por favor, selecione um nível válido.';
        return;
    }

   
    let salario = valorHoraAula * qtdAulas * 4.5;

    
    document.getElementById('resultado').innerHTML = `
        <p>Nível do Professor: ${nivel}</p>
        <p>Quantidade de Horas/Aula por Semana: ${qtdAulas}</p>
        <p>Valor por Hora/Aula: R$ ${valorHoraAula.toFixed(2)}</p>
        <p>Salário Mensal: R$ ${salario.toFixed(2)}</p>
    `;
}