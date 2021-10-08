var i = 0;
var n;
var soma = 0;

while(i<10){
    n = parseInt(prompt(`Insira o ${i}° número:`));
    if(n<40){
        soma += n;
    }
    i++;
}

var resultado = `A soma dos números menores que 40 é ${soma}`;
document.getElementById("resultado").innerHTML = resultado;
