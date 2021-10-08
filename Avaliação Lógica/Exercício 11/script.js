function calcular(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var numero3 = parseInt(document.getElementById("num3").value);
    var numero4 = parseInt(document.getElementById("num4").value);
    var numero5 = parseInt(document.getElementById("num5").value);
    var numero6 = parseInt(document.getElementById("num6").value);
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var numero9 = parseInt(document.getElementById("num9").value);
    var numero10 = parseInt(document.getElementById("num10").value);
    var valores = [];
    var media = (numero1+ numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9+ numero10)/10;
    valores.push(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10);

    var resultado = `Os valores são ${valores} <br> A média dos valores é ${media}`;
    document.getElementById("media").innerHTML = resultado;
}