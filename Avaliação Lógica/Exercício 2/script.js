var numero = 5;
var i = 1;
var valores = [];

while (i <= 10) {
    var multi = numero * i;
    var tabuada = `${numero} X ${i} = ${multi} <br>`;
    valores.push(tabuada);
    document.getElementById("tabuada").innerHTML = valores;
    i++;
}