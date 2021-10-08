function comparar(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado;
    if(numero1 > numero2){
        resultado = "O primeiro é maior";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else if(numero1 === numero2){
        resultado = "Os número são iguais iguais";
        document.getElementById("resultado").innerHTML = resultado;
    }
    else{
        resultado = "O segundo é maior";
        document.getElementById("resultado").innerHTML = resultado;
    }
}
