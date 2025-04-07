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
