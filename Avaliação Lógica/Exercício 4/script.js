// soma dos dois maiores
var num1 = parseInt(prompt("Insira um número"));
var num2 = parseInt(prompt("Insira um número"));
var num3 = parseInt(prompt("Insira um número"));
var soma;

if(num1 > num2 && num2 > num3){
    soma = num1 + num2;
    document.write("A soma dos dois número maiores é " + soma);
}
else if(num2 > num1 && num3 > num1){
    soma = num2 + num3;
    document.write("A soma dos dois número maiores é " + soma);
}
else{
    soma = num3 + num1;
    document.write("A soma dos dois número maiores é " + soma);
}