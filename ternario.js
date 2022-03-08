/* Faz uma comparação (estilo o If/Else), comparando em uma unica linha

*/
const idade = 18;
const id = 19;
// if padrão
if ( id >= idade){
    console.log("Cerveja.");
}else{
    console.log("Refrigerante.")
}
// ternário - condição /  true : false
console.log(id >= idade ? "cerveja" : "refrigerante")