// 'Ana', 'Marcos', 'Maria', 'Mauro'
// 7, 4.5, 8, 7.5

let nomes=['Ana', 'Marcos', 'Maria', 'Mauro']
let notas=[7, 4.5, 8, 7.5]
// Filter retorna boolean (True/False)
const rep = nomes.filter((aluno,indice) => notas[indice] < 8.1 )
console.log(rep);
