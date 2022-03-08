// Var, Let e Const
/*
Var = primeira que surgiu, funciona em qualquer parte do código
-> posso definir o tipo var em qualquer lugar do código e já se utilizar.
Mt propensa a bugs.
*/
var altura1 = 5;
var comprimento1 = 7;
var area1 = altura1*comprimento1
console.log(area1)

/*
Let = resolver problemas do var, que é sem regras (muito open), duplicando variáveis e afins.
Aceita alterar valores.
Sabe que vai precisar alterar valor, usa-se let.
*/
let forma = 'retangulo';
let altura = 6;
let comprimento = 8;
let area
if(forma === 'retangulo'){
    area = altura*comprimento
}else{
    area = (altura*comprimento)/2
}
console.log(area)

/*
Const não permite alterar seu valor
*/
const forma1 = 'quadrado'
const alt = 5;
const comp = 7;
const ar = alt * comp;
console.log(ar)