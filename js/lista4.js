function exe01() {
  let numeros = [];

  for (let i = 0; i < 6; i++) {
    // Inserindo número no vetor
    numeros.push(Number(prompt(`Informe o elemento ${i}`)))
  }

  // Calculando os pares e ímpares
  let pares = []
  let impares = []

  // Cria o loop para calcular todos os elementos do vetor
  for(let i = 0; i < numeros.length; i++){
    
    if(numeros[i] % 2 == 0){    // Calcula se for par

        pares.push(numeros[i])  // Adiciona ao vetor pares
    } 
    else {    // Caso contrário é ímpar

        impares.push(numeros[i])    // Adiciona ao vetor ímpares
    }
  }

  // Exibe os resultados pares
  alert(`Números pares: ${pares} e a quantidade: ${pares.length}`)
  // Exibe os resultados Ímpares
  alert(`Números pares: ${impares} e a quantidade: ${impares.length}`)

}
