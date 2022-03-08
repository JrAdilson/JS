/* Arrow Function
Utiliza-se => 
Características ARROW FUNCTION
Recente, veio em 2015.
Código menor, declarando tudo em uma linha só, sem return, mais prático
Não é nomeada.
Sempre é utilizado const nomeVariável
Se comporta como expressão.
*/

// Como era antes, nas ultimas funções
function apr(nome){
    return `Name: ${nome}`
}
// Com Arrow Function, utiliza-se assim:
const aprArrow = nome => `Nomezito: ${nome}`;

const soma = (number1,number2) => number1+number2;

// Arrow com mais de uma linha de instrução
const som4 = (num, num1) => {
    if(num1 || num > 10){
        return "Uau, seu numero é grande, válido somente 1 a 9"
    }else{
        return num + num1;
    }
}
console.log(apr());