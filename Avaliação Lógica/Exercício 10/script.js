var i = 1;
var num = parseInt(prompt("Insira um número: "));
var resultado = [];

while(num <= 0){
    alert("Tente um número maior do que ZERO");
    num = parseInt(prompt("Insira um número"));
}
while(i <= num){
    resultado.push(i);
    document.getElementById("resultado").innerHTML = resultado;
    i++;
}