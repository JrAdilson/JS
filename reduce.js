const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]
// Reduce = pega todo o Array, trás um unico valor e retorna ele;
function mediaSala(notasSala){
    const soma = notasSala.reduce((acum,atual) => 
    atual + acum,0)
    return soma/notasSala.length
}
console.log(`${mediaSala(salaJS)}`)
console.log(`${mediaSala(salaJava)}`)
console.log(`${mediaSala(salaPython)}`)

let numeros = [1,2,3,4]
let soma = numeros.reduce((a,b) => a+b)
console.log(soma)