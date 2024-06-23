function verificarTriangulo() {
    let x = parseInt(document.getElementById('tamanhox').value);
    let y = parseInt(document.getElementById('tamanhoy').value);
    let z = parseInt(document.getElementById('tamanhoz').value);
    let resultado;
  
    if (x + y > z && x + z > y && y + z > x) {
        if (x === y && y === z) {
            resultado = "Triângulo Equilátero.";
        } else if (x === y || x === z || y === z) {
            resultado = "Triângulo Isósceles.";
        } else {
            resultado = "Triângulo Escaleno.";
        }
    } else {
        resultado = "Não forma um triângulo.";
    }
  
    
    document.getElementById('resultado').innerText = resultado;
  }
  
  document.getElementById('verificarotriangulo').addEventListener('click', verificarTriangulo);