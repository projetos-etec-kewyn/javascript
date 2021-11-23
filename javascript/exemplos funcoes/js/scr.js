//EXEMPOS DE FUNÇÕES (4 TIPOS)

//1- FUNÇÃO SEM PARÂMETROS E SEM RETORNO

function teste1(){
    console.log("Bom dia!");
}



//2- FUNÇÃO SEM PARÂMETROS E COM RETORNO

function teste2(){
    var frase= "EAE!";
    return frase;
}
var resultado = teste2();
console.log(resultado);



//3- FUNÇÃO COM PARÂMETROS E SEM RETORNO
function muda_texto(texto){
    document.getElementById('par').innerHTML = texto;
}

//4- FUNÇÃO COM PARÂMETROS E COM RETORNO
var num1 = 10;
var num2 = 20;

function soma(num1,num2){
    var soma = num1+num2;
    return soma;
}
var total = soma(num1,num2);
console.log("A soma é " + total);