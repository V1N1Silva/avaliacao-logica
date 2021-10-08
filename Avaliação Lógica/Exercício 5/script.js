function somar(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var soma = numero1 + numero2;
    var resultado = `A soma entre ${numero1} e ${numero2} é = ` + `<span>${soma}</span>`;
    document.getElementById("resultado").innerHTML = resultado;
}
function sub(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var subtracao = numero1 - numero2;
    var resultado = `A subtração entre ${numero1} e ${numero2} é = ` + `<span>${subtracao}</span>`;
    document.getElementById("resultado").innerHTML = resultado;
}
function mult(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var multiplicacao = numero1 * numero2;
    var resultado = `A multiplicação entre ${numero1} e ${numero2} é = ` + `<span>${multiplicacao}</span>`;
    document.getElementById("resultado").innerHTML = resultado;
}
function div(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var divisao = numero1 / numero2;
    var resultado = `A divisão entre ${numero1} e ${numero2} é = ` + `<span>${divisao}</span>`;
    document.getElementById("resultado").innerHTML = resultado;
}