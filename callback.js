/* Funções Callback

Não necessariamente preciso criar uma função direta no forEach, posso utilizar uma já existente no código.


*/
function mult(x,y){
    return x*y
}
function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
function div(x,y){
    return x/y
}
function calc(x,y,comput){
    return comput(x,y)
}
let a = calc(10,5,add)
console.log(a)
let b = calc(10,5,mult)
console.log(b)
let c = calc(10,5,sub)
console.log(c)
let d = calc(10,5,div)
console.log(d)
const nomes = ['Adilson', 'Milena', 'Luiza', 'Vivian'];

nomes.forEach(imprimeNome)
function imprimeNome(nome){
    console.log(nome);
}

function calcular(x,y, evento){
    return evento(x,y)
}
console.log(calcular(5,10, (a,b) => a+b))
console.log(calcular(5,10, (a,b) => a*b))
console.log(calcular(5,10, (a,b) => a-b))
console.log(calcular(5,10, (a,b) => a/b))