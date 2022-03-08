// Parâmetros de Função
/*
Passa os parâmetros necessários, no caso dois numeros para serem somados.
*/
function soma(num,mun){
    return num+mun;
}
console.log(soma(7,8));
console.log(soma(7,8));
console.log(soma(7,8));
console.log(soma(7,8));
// function twoSoma(){
   // return 58+25;
// }
// console.log(twoSoma());

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e idade ${idade}`;
}
console.log(nomeIdade("Teste", 212))

function multi(number = 1,bernum = 1){
    return number * bernum;
}
console.log(multi(soma(4,5)))