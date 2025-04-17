function exe1(){
    // recupera os dados do usuário
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    let d = Number(document.getElementById("d").value)

    let i = 1 // variável que conta quantas vezes o laço vai se repetir
    let aux // será utilizada nas trocas das variáveis a, b, c e d
    while (i <= 3){
        if (a > b){
            aux = a; a = b; b = aux;
        }    
        if (b > c){
            aux = b; b = c; c = aux;
        }
        if (c > d){
            aux = c; c = d; d = aux;
        }
        i++ // incrementa i
    }
    document.getElementById("ordena").innerHTML = `Ordem crescente ${a} ${b} ${c} ${d} e ordem decrescente ${d} ${c} ${b} ${a}`
}

function exe2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let lucro // guarda o lucro da peço de teatro
    let saida = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td>${despesa} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26
    }
    document.getElementById("tabela").innerHTML = saida
}

// Começando Agora
function exe03(){
    let faixa1 = 0
    let faixa2 = 0
    let faixa3 = 0
    let faixa4 = 0
    let faixa5 = 0
    let idade

    for(let i = 1; i <= 8; i++){

        idade = Number(prompt(`Digite a idade ${i}`))

        if(idade >= 0 && idade <= 15){
            faixa1++
        }
        else if (idade > 15 && idade <= 30){
            faixa2++
        }
        else if (idade > 30 && idade <= 45){
            faixa3++
        }
        else if (idade > 45 && idade <= 60){
            faixa4++
        }
        else if (idade > 60){
            faixa5++
        } else {
            alert("Idade Negativa")
        }
    }


    console.log(faixa1, faixa2, faixa3, faixa4, faixa5)
    document.getElementById('result1').innerHTML = 
    `Faixa etária 1: ${faixa1}<br/>Faixa etária 2: ${faixa2}<br/>Faixa etária 3: ${faixa3}<br/>Faixa etária 4: ${faixa4}<br/>Faixa etária 5: ${faixa5}<br/>` +
    `Faixa 1: ${(faixa1/8)*100}%. Faixa 5: ${(faixa5*8)/100}%`

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
    
}

function exe04(){
    let numero = Number(document.getElementById('numero1').value)
    let resultado = ""

    // Calculando a tabuada
    for(let i = 1; i <= 10; i++){
        resultado += `${numero} x ${i} = ${i * numero}<br/>`
    }

    document.getElementById('result1').innerHTML = resultado
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe05(){
    let numero = Number(document.getElementById('numero1').value)
    let resultado = ""

    // Calculando a tabuada
    for(let multiplicando = 1; multiplicando <= 10; multiplicando++){
        resultado += `<div>Tabuada do ${multiplicando}<br/>`
        for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
            resultado += `${multiplicador} x ${multiplicando} = ${multiplicador * multiplicando}<br/>`
        }
        
        
            resultado = `${resultado}</div>`
      
    }

    document.getElementById('result1').innerHTML = resultado
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe06(){
    let codigo, valor, totalVista = 0, totalPrazo = 0
    let resultado = ""

    for(let i = 1; i <= 5; i++){

        do{
            codigo = prompt(`Digite V (à vista) ou P (à prazo)`).toUpperCase();
        }while(codigo != 'V' && codigo != 'P')

        valor = Number(prompt(`Digite o valor da transação`))
        if(codigo == 'V'){
            totalVista += valor
        }
        else {
            totalPrazo += valor
        }
    }

    resultado = `Total à vista: ${totalVista}
                <br>Total à prazo: ${totalPrazo}
                <br>Total Geral: ${totalPrazo + totalVista}
                <br>Valor da primeira parcela: ${totalPrazo / 3}`

    // Mostrando os resultados
    document.getElementById('result1').innerHTML = resultado
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe07(){
    let idade = 0, altura = 0, peso = 0
    let idade50 = 0, idade10e20 = 0, somaAltura = 0, peso40 = 0
    let resultado

    for(let i = 1; i <= 2; i++){

        do{
            idade = Number(prompt(`Informe a idade da pessoa ${i}`));
        }while(idade < 0);

        altura = Number(prompt(`Informe a altura da pessoa ${i}`));
        peso = Number(prompt(`Informe o peso da pessoa ${i}`));

        if(idade > 50){
            idade50++
        }
        if(idade >= 10 && idade <= 20){
            idade10e20++
            somaAltura += altura
        }

        if(peso < 40){
            peso40++
        }
    }

    resultado = `Item 1: ${idade50} <br/> Item 2: ${somaAltura / idade10e20} <br/> Item 3: ${peso40}`

    // Mostrando os resultados
    document.getElementById('result1').innerHTML = resultado
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}

function exe08(){
    let idade, altura, peso, olhos, cabelos
    let idade50peso60 = 0, somaIdade = 0, qtdeAltura150 = 0
    let qtdeAzuis = 0, qtdeRuivo = 0
    let resultado = ""

    // entrada e processamento de dados
    for(let i = 0; i <= 3; i++){
        idade = Number(prompt(`Informe idade ${i}`));
        altura = Number(prompt(`Informe altura ${i}`));
        peso = Number(prompt(`Informe peso`));

        do {
            cabelos = Number(prompt(`Informe peso`));
        } while(cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')

        do{
            olhos = prompt('Informe a cor dos olhos').toUpperCase();
        }while(olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C');

        // Processamento
        if(idade > 50 && peso < 60){
            idade50peso60++
        }
        if(altura < 1.50){
            somaIdade += idade
            qtdeAltura150++
        }
        if(olhos == 'A'){
            qtdeAzuis++
        }
        if(cabelos == 'R' && olhos != 'A'){
            qtdeRuivo++
        }
    }

    resultado = `Item 1: ${idade50peso60} Item 2: ${somaAltura/qtdeAltura150} Item 3: ${qtdeAzuis} Item 4: ${qtdeRuivo}`

    // Mostrando os resultados
    document.getElementById('result1').innerHTML = resultado
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
}