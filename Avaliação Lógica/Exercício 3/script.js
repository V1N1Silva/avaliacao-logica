var num1 = parseInt(prompt("Insira um número"));
var num2 = parseInt(prompt("Insira um número"));
var num3 = parseInt(prompt("Insira um número"));

if(num1 > num2 && num1 > num3){
    document.write("O maior número é o " + num1);
}
else if(num2 > num1 && num2 > num3){
    document.write("O maior número é o " + num2);
}
else{
    document.write("O maior número é o " + num3);
}