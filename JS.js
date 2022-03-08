// Tipo Number
const numero = 3;
const number1 = 1;
const number2 = 2;
// Numero está recebendo um dado do Tipo numero e seu valor é 3, 1 e 2;
/* Somando numeros */
const soma = number1+numero;
/* Subtraindo numeros */
const sub = number2 - number1;
/* para utilizar multiplicacao utiliza-se * e divisão utiliza-se / 
/* Calculando média de numeros */
const media = (numero+number1+number2)/3
// NaN = Not a Number (não é um número) - Tentou fazer uma operação mas não é reconhecido como numero.
const fim = "Fim";
const teste = fim * numero;
console.log(media, soma, sub, teste);
// Divisão por 0 = retorna Infinity
var a = 10
var b = 0
console.log(a/b) // Infinity
// Tipo String
const texto1 = "Adilson"
const texto2 = "Milena"
const citacao = "Meu nome é: ";
// concatenação (+)
console.log(citacao + texto1);
// Quando utilizado \u no inicio da string, significa os icones do UniCode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
// Tipo Boolean (True or False)
// um igual (=) atribui Valor
// dois iguais / tres iguais (== ou ===) são comparações
const num = 3;
const num2 = 3;
console.log(num === num2);