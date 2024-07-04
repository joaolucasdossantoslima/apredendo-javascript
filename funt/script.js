function CalculoImc(){

    //                       estou pegando o valor dentro do campo
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)

    const imc = peso / altura ** 2 
    //                 estou colocando o valor dito no campo indicado
    document.getElementById("imcResultado").textContent = imc.toFixed(2)
}

