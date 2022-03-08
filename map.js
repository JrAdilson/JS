// Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto extra.
// Notas: 10, 9, 8, 7, 6

/* const notas = [10,9,8,7,6]
const newNotas = notas.map( nota => nota+1)
console.log(newNotas) */

const notas = [10,9,8,7,6]
const newNotas = notas.map(nota => nota == 10 ? nota : ++nota) // ++nota ou nota+1
console.log(newNotas)