function seguir(){
    alert("Você agora está seguindo Leonardo Silva")
}

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

function exe02(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)

    // Multiplicando
    let result = nro1 * nro2 * nro3

    document.getElementById("result").innerHTML = "O resultado é: " + result
}