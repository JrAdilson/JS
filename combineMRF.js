let animais = [
    {nome: 'Fumaca', idade: 3, tipo: 'gato'},// 3 anos = 15+10+4 = 29 anos,
    {nome: 'Tobby', idade: 6, tipo: 'cao'},
    {nome: 'Laminha', idade: 1, tipo: 'gato'},// 1 ano = 15 anos.
    {nome: 'Nutella', idade: 3, tipo: 'cao'},
    {nome: 'Luke', idade: 3, tipo: 'cao'}
] // 3 anos = 29 anos
let combine = animais.filter((animal) => {
    return animal.tipo === 'cao'
}).map(idd => {
    return idd.idade*7;
}).reduce((total, currentValue) => {
    return total + currentValue
})

let combi = animais.filter((animal) => {
    return animal.tipo === 'gato'
}).map(idd => {
    if(idd.idade >= 2){
       return ((idd.idade-2)*4)+25
    }else if(idd.idade == 1){
        return idd.idade = 15
    }
}).reduce((total, currentValue) => {
    return total + currentValue
})
console.log(`A soma total da idade de todos os cachorros é de ${combine}`)
console.log(`A soma total da idade de todos os gatos é de ${combi}`)