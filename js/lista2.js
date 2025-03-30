function exe01(){

    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    //calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("resultado").innerText = "Aprovado com média " + media
    } else {
        document.getElementById("resultado").innerText = "Reprovado com média " + media
    }

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

// Exe02 Calcula a média de duas notas
function exe02(){

    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    

    //calcular média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("resultado").innerText = "Reprovado com média: " + media
    } else if ((media >= 3) && (media < 7)){
        document.getElementById("resultado").innerText = "Exame: " + media
    } else if ((media >= 7) && (media <= 10)){
        document.getElementById("resultado").innerText = "Aprovado com média: " + media
    } else {
        document.getElementById("resultado").innerText = "Problema com as notas "
        
    }

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}
function exe03(){

    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    

    //calcular média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("resultado").innerText = "Reprovado com média: " + media
    } else if ((media >= 3) && (media < 7)){
        document.getElementById("resultado").innerText = "Exame: " + media
    } else if ((media >= 7) && (media <= 10)){
        document.getElementById("resultado").innerText = "Aprovado com média: " + media
    } else {
        document.getElementById("resultado").innerText = "Problema com as notas "
        
    }

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}
function exe04(){

    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    
    if (numero1 >= numero2 && numero1 >= numero3){
        document.getElementById("result1").innerHTML = "O maior é " + numero1
    }
    else if (numero2 >= numero1 && numero2 >= numero3){
        document.getElementById("result1").innerHTML = "O maior é " + numero2
    }
    else if (numero3 >= numero1 && numero3 >= numero2){
        document.getElementById("result1").innerHTML = "O maior é " + numero3
    }   
    

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe05(){
      // recupera os dados do usuário
      let nro1 = Number(document.getElementById("numero1").value)
      let nro2 = Number(document.getElementById("numero2").value)
      let selecao = Number(document.getElementById("selecao").value)
      // utilização do escolha
      switch (selecao){
          case 1: document.getElementById("result1").innerText = (nro1 + nro2) / 2
                  break
          case 2: if (nro1 >= nro2){
                      document.getElementById("result1").innerText = nro1 - nro2
                  }
                  else {
                      document.getElementById("result1").innerText = nro2 - nro1
                  }
                  break
          case 3: document.getElementById("result1").innerText = nro1 * nro2
                  break
          case 4: if (nro2 != 0){
                      document.getElementById("result1").innerText = nro1 / nro2
                  }
                  else {
                      document.getElementById("result1").innerText = "Divisão por zero"
                  }
      }

      // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}


function exe06(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)

    switch(selecao){
        case 1:
            document.getElementById("result1").innerHTML = `O número ${nro1} elevado à potência ${nro2} resulta em: ${Math.pow(nro1, nro2)}`

            break
        case 2:
            document.getElementById("result1").innerHTML = `Raiz Quadrada do primeiro: ${Math.sqrt(nro1).toFixed()} <br/>
                                                            Raiz Quadrada do segundo: ${Math.sqrt(nro2).toFixed()}`
            break
            case 3:
                document.getElementById("result1").innerHTML = `Raiz Cúbica do primeiro: ${Math.cbrt(nro1).toFixed()} <br/>
                                                                Raiz Cúbica do segundo: ${Math.cbrt(nro2).toFixed()}`
            break
            
    }

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe07(){
    // Armazenando a informação do salário
    let salario = Number(document.getElementById("salario").value)

    // Calculando se haverá reajuste
    if (salario < 500) {
        document.getElementById("result1").innerHTML = `O novo salário é R$ ${salario *= 1.3}`
    } else {
        document.getElementById("result1").innerHTML = "Salário maior ou igual a 500, sem reajuste."
    }

     // Exibe o card Resultado
     document.getElementById('cardResultado').classList.remove("hidden")
}

function exe08(){
    // Armazenando a informação do salário
    let salario = Number(document.getElementById("salario").value)

    if(salario < 0){
        document.getElementById("result1").innerHTML = `O salário é negativo`

    } else if (salario <= 300) {
        document.getElementById("result1").innerHTML = `O novo salário é R$ ${salario *= 1.35}`
    } else {
        document.getElementById("result1").innerHTML = `O novo salário é R$ ${salario *= 1.15}`
    }

     // Exibe o card Resultado
     document.getElementById('cardResultado').classList.remove("hidden")
}


function exe09(){
    // Armazenando a informação do salário.
    let saldo = Number(document.getElementById("saldoMedio").value)
    let credito = 0

    // Realiza o cálculo do crédito.
    if(saldo > 400){
        credito = saldo * 0.30
    } else if (saldo > 300 && saldo <= 400) {
        credito = saldo * 0.25
    } else if (saldo > 200 && saldo <= 300){
        credito = saldo * 0.20
    } else if (saldo >= 0 && saldo <= 200){
        credito = saldo * 0.10
    } else {
        document.getElementById("result1").innerHTML = `Saldo Não pode ser negativo`
        return
    }

    // Transformando em Moeda.
    saldo = saldo.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    credito = credito.toLocaleString('pt-BR', {
        style: "currency",
        currency: 'BRL'
    })

    // Exibindo o resultado.
    document.getElementById("result1").innerHTML = `Saldo: ${saldo}<br/>Crédito: ${credito}`

     // Exibe o card Resultado.
     document.getElementById('cardResultado').classList.remove("hidden")
}


function exe10(){
    // Armazenando a informação do salário.
    let custoFabrica = Number(document.getElementById("custoFabrica").value)
    let distribuidor = 0
    let imposto = 0
    


    // Realiza o cálculo do crédito.
    if (custoFabrica >= 0 && custoFabrica < 12000){
        distribuidor = custoFabrica * 0.05
        imposto = 0
    } else if(custoFabrica > 12000 && custoFabrica <= 25000){
        distribuidor = custoFabrica * 0.10
        imposto = custoFabrica * 0.15

    }
    else if (custoFabrica > 25000){
        distribuidor = custoFabrica * 0.15
        imposto = custoFabrica * 0.20
    }
    else {
        document.getElementById("result1").innerHTML = `Custo Negativo`
    }

    // Atribuindo o valor ao consumidor
    let consumidor = custoFabrica + distribuidor + imposto
    
    console.log(consumidor, custoFabrica, distribuidor, imposto)

    // Transformando em Moeda usando o map para evitar repetir código (DRY).
    let tempArray = [consumidor, custoFabrica, distribuidor, imposto]
    tempArray = tempArray.map((e) => e.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }))

    // Exibindo o resultado.
    document.getElementById("result1").innerHTML = `Custo da Fábrica: ${tempArray[1]}<br/>Distribuidor: ${tempArray[2]}<br/>Imposto: ${tempArray[3]}<br/>Valor ao Consumidor: ${tempArray[0]}`

     // Exibe o card Resultado.
     document.getElementById('cardResultado').classList.remove("hidden")
}


function exe24(){
    // Definindo variáveis e armazenando valores.


    // Lógica de cálculo e formatação de moeda.


    // Exibindo os Resultados


     // Exibe o card Resultado.
     document.getElementById('cardResultado').classList.remove("hidden")
}

function exe25(){
    // Definindo variáveis e armazenando valores
    let horasExtras = Number(document.getElementById('horasExtras').value)
    let horasFaltas = Number(document.getElementById('horasFaltas').value)
    let valorPremio
    let faixaDeValor

    // Calculando faixa de valor
    faixaDeValor = horasExtras - ((2/3) * horasFaltas)

    // Convertendo para minutos
    faixaDeValor = faixaDeValor * 60

    // Lógica de cálculo
   if (faixaDeValor > 0 && faixaDeValor < 600){
        valorPremio = 100
    } else if (faixaDeValor >= 600 && faixaDeValor < 1200 ){
        valorPremio = 200
    } else if (faixaDeValor >= 1200 && faixaDeValor < 1800){
        valorPremio = 300
    } else if (faixaDeValor >= 1800 && faixaDeValor < 2400){
        valorPremio = 400
    } else {
        valorPremio = 500
    }

    // Exibindo os Resultados
    faixaDeValor > 0 ?
    document.getElementById('result1').innerHTML = `O valor do prêmio é: ${valorPremio.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}`
        : document.getElementById('result1').innerHTML = `Valor de horas negativo, impossível calcular.`

    // Exibe o card Resultado.
    document.getElementById('cardResultado').classList.remove("hidden")
}
