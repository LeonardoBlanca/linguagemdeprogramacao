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