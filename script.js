/* Tipagem Dinâmica
Nunca declara o tipo de variável (Untyped)
No caso do JS, podemos criar uma variável e não definir seu tipo.
Podendo reatribuir futuramente, como exemplo abaixo.
JS é Multiparadigma, podendo resolver um problema de várias formas.
JS é interpretado, não compilado.
No caso, ela é
*/
let sim = 3;
sim = "Três"
// No caso alterei o tipo, indiferente de definir se é String ou Number, JS faz isso automaticamente

/* Erros Comuns JS (Interpretação)
Como por exemplo inicializar a const, quando declarada
Variáveis não declaradas

Tipos Erros:
RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito
com números inteiros maiores ou iguais a zero, mas recebe -1.

ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida;
muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. 
Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, 
como esquecer de fechar chaves ou colchetes.

TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
*/

// Console.log serve para guardar um registro;
// Console.error serve para guardar um erro, já definindo-o;
/*
console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.
*/
let teste = 1;
let test1 = 4;

if(teste < test1){
    console.log("Sim.")
}else{
    console.error("Hmmm você errou!")
}

/* Diferença ==
o == (comparacao implicita)
Nesse caso ele converte o tipo string pra number, fazendo eles ficarem iguais. (compara somente o valor)

o === (comparacao explicita)
Não faz essa conversão, sendo ela manual (compara valor e o tipo da variável)

typeof = tipo de dado que está sendo salvo na variável.
*/
const num = 5;
const tex = "5"
console.log(num==tex);
