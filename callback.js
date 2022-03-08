/* Funções Callback

Não necessariamente preciso criar uma função direta no forEach, posso utilizar uma já existente no código.


*/
const nomes = ['Adilson', 'Milena', 'Luiza', 'Vivian'];

nomes.forEach(imprimeNome)

function imprimeNome(nome){
    console.log(nome);
}