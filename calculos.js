function calcularResultadoSoma() {

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const soma = numero1 + numero2;

    document.getElementById("resultado").value = soma
}
function calcularResultadoSubtracao() {

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const subtracao = numero1 - numero2;

    document.getElementById("resultado").value = subtracao
}
function calcularResultadoDivisao() {

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const divisao = numero1 / numero2;

    document.getElementById("resultado").value = divisao
}

function calcularResultadoMultiplicacao() {

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const muliplicacao = numero1 * numero2;

    document.getElementById("resultado").value = muliplicacao
}