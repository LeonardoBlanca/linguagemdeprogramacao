function seguir(){
    alert("Você agora está seguindo Leonardo Silva")
}

// O exe01 calcula a subração de dois números.
function exe01(){
    // Vamos usar DOM para recuperar os dados do HTML
    // DOM - Document Object Model
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)

    // Vamos fazer a subtração
    let sub = nro1 - nro2

    // Mostrar o resultado
    // alert("A subração é: " + sub)
    document.getElementById("sub").innerText = "O resultdo é: " + sub
}

// O exe 02 Calcula a multiplicação de 3 números.
function exe02(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)

    // Multiplicando
    let result = nro1 * nro2 * nro3

    document.getElementById("result").innerHTML = "O resultado é: " + result
}

// O exe04 calcula a divisão de 2 números.
function exe03(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)

    let resultado = nro1 / nro2
    document.getElementById("result").innerHTML = "O resultado é " + resultado
    
}

// O exe04 calcula a média ponderada entre duas notas.
function exe04(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    
    nro1 *= 2 // Colocando peso 2
    nro2 *= 3 // colocando peso 3

    let resultado = (nro1 + nro2) / (2 + 3) // Dividindo pela soma dos pesos

    document.getElementById("result").innerHTML = "O resultado é " + resultado
}

// O exe05 calcula o aumento de 10% em um preço.
function exe05(){
    let nro1 = Number(document.getElementById("nro1").value)
    
    // Adiciona 10%
    let resultado = (nro1 * 1.10).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    
    document.getElementById("result").innerHTML = "O novo preço é: " + resultado
}

function exe06(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let comissao = 0.04


    let salarioComissao = nro2 * (1 + comissao)

    document.getElementById("result1").innerHTML = salarioComissao.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    document.getElementById("result2").innerHTML = (nro1 + salarioComissao).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

}

function exe07(){
    let nro1 = Number(document.getElementById("nro1").value)



    let result1 = nro1 * 1.15
    let result2 = nro1 - (nro1 * 0.20)

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")

    // Exibe o resultado
    document.getElementById("result1").innerHTML = result1.toFixed(2) + " Kg"
    document.getElementById("result2").innerHTML = result2.toFixed(2) + " Kg"

}

// O exe08 calcula o peso em gramas a partir do peso em kg.
function exe08(){
    let nro1 = Number(document.getElementById("nro1").value)
    
    // O método toLocaleString coloca separador de milhares
    let resultado = parseFloat(nro1 * 1000).toLocaleString('pt-BR')

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")
    
    document.getElementById("result1").innerHTML = resultado + " gramas"
}

// O exe09 calcula a áre de um trapézio. Precisa da base maior, base menor e altura.
function exe09(){
    let baseMaior = Number(document.getElementById("nro1").value)
    let baseMenor = Number(document.getElementById("nro2").value)
    let altura = Number(document.getElementById("nro3").value)
    
    let resultado = ((baseMaior + baseMenor) * altura ) / 2

    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")


    document.getElementById("result1").innerHTML = resultado
}

function exe10(){
    let lado1 = Number(document.getElementById("nro1").value)
    let lado2 = Number(document.getElementById("nro2").value)

    let resultado = lado1 * lado2
    
    // Exibe o card Resultado
    document.getElementById('cardResultado').classList.remove("hidden")

    document.getElementById("result1").innerHTML = resultado
}