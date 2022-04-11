let animais = [
    { nome: 'Fumaça',  idade: 3, tipo: 'gato'  }, // 29 anos
    { nome: 'Tobby',   idade: 6, tipo: 'cao'   },
    { nome: 'Laminha', idade: 1, tipo: 'gato'  }, // 15 anos*-
    { nome: 'Nutella', idade: 3, tipo: 'rato'  },
    { nome: 'Luke',    idade: 7, tipo: 'cao'   },
    { nome: 'Rex',     idade: 2, tipo: 'rato'  },
    { nome: 'Bety',    idade: 5, tipo: 'cao'   },
    { nome: 'Duke',    idade: 1, tipo: 'rato'  },
    { nome: 'Djanho',  idade: 4, tipo: 'gato'  } // 15 + 10 + 4 + 4 = 33
]
let combine = animais.filter((animal) => {
    return animal.tipo === 'cao'
})
let combi = animais.filter((animal) =>{
    return animal.tipo === 'rato'
})

let combin = animais.filter((animal) =>{
    return animal.tipo === 'gato'
})

let idadeGeral = animais.filter((animal) => {
    return animal.tipo==='gato'
}).map (idd => {
    if(idd.idade >= 3){
       return ((idd.idade-2)*4)+25
    }else if(idd.idade == 1){
        return idd.idade = 15
    }else if(idd.idade == 2){
        return idd.idade = 25
    }
}).reduce((total, currentValue) => {
    return total + currentValue
})

console.log('Cães:',combine)
console.log('Gatos:',combin)
console.log('Ratos:',combi)
console.log(`A soma das idades dos gatos é: ${idadeGeral}`)
let count = 0;
let idadeAllCao = animais.filter((animal) => {
    return animal.tipo ==='cao'
}).map(idd =>{
    if(idd.idade >= 3){
       return 1
    }
}).reduce((total, currentValue) =>{
    return total + currentValue
})
let idadeAllGato = animais.filter((animal) => {
    return animal.tipo ==='gato'
}).map(idd =>{
    if(idd.idade >= 3){
        return 1
    }else{
        return 0
    }
}).reduce((total, currentValue) =>{
    return total + currentValue
})
let idadeAllRato = animais.filter((animal) => {
    return animal.tipo ==='rato'
}).map(idd =>{
    if(idd.idade >= 3){
        return 1
    }else{
        return 0
    }
}).reduce((total, currentValue) =>{
    return total + currentValue
})
let sum = idadeAllRato + idadeAllGato + idadeAllCao;
console.log(`Temos ${sum} animais com 3 ou mais anos\n`)
console.log('Dentre eles temos:\n')
console.log(`${idadeAllGato} gatos`);
console.log(`${idadeAllCao} cães`);
console.log(`${idadeAllRato} ratos`);
/* Exiba os animais mais novos e os mais velhos
Resultado será:
Mais novos: Laminha, Duke, tendo apenas 1 anos
Mais velhos: Luke tendo 7 anos.
*/
// console.log(`Mais Velho(s): ${animal.nome} tendo ${animal.idade} ano(s))