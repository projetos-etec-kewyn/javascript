var num1 = parseInt(prompt("Digite o num1"));
var num2 = parseInt(prompt("Digite o num2"));

var soma = num1 + num2;
var mul = num1 * num2;
var sub = num1 - num2;
var div = num1 / num2;
//console.log(soma);

document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('soma').innerHTML = soma;
document.getElementById('sub').innerHTML = sub;
document.getElementById('mul').innerHTML = mul;
document.getElementById('div').innerHTML = div;