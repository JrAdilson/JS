/* Expressão de função
Não tem um nome específico, define no ato de criar a variável, é opcional (geralmente não utiliza-se)
O que tem nome é a variável utilizada.
*/
/* Declaração de função
Declara um nome específico pra função.
*/

// Diferença principal (Expressão x Declaração)
/* 
Funções e VAR são listadas no topo, como global. 
Então com o const irá dar erro, necessita ser alinhado função e dps o retorno e consequentemente o console.
*/
// console.log(soma(1,1))
console.log(apr())
function apr(){
    return "Olá";
}
const soma = function(num1, num2){ return num1+num2};
console.log(soma(1,1))
