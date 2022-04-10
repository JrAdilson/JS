// 'Ana', 'Marcos', 'Maria', 'Mauro'
// 7, 4.5, 8, 7.5

let nomes=['Ana', 'Marcos', 'Maria', 'Mauro']
let notas=[7, 4.5, 8, 7.5]
// Filter retorna boolean (True/False)
const rep = nomes.filter((aluno,indice) => notas[indice] < 8.1 )
console.log(rep);

let pets = [
    {
        nome: 'Zeus', idade: 2, tipo: 'dog'
    },
    {
        nome: 'Lil', idade: 6, tipo: 'dog'
    },
    {
        nome: 'Melzinha', idade: 11, tipo: 'dog'
    },
    {
        nome: 'Alaska', idade: 0.5, tipo: 'cat'
    }
]
let cats = pets.filter((animal) => {
    return animal.tipo === 'cat'
})
let idd = pets.filter((animal => {
    return animal.idade == 6
}))

console.log(cats)
console.log(idd)
let nome = pets.filter((animal => {
    return animal.nome == 'Alaska'
}))
console.log(nome)