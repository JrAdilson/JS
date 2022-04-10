let animais = [
    { nome: 'Fumaça',  idade: 3, tipo: 'gato'  },
    { nome: 'Tobby',   idade: 6, tipo: 'cao'   },
    { nome: 'Laminha', idade: 1, tipo: 'gato'  }, // 15 anos
    { nome: 'Nutella', idade: 3, tipo: 'rato'  },
    { nome: 'Luke',    idade: 7, tipo: 'cao'   },
    { nome: 'Rex',     idade: 2, tipo: 'rato'  },
    { nome: 'Bety',    idade: 5, tipo: 'cao'   },
    { nome: 'Duke',    idade: 1, tipo: 'rato'  },
    { nome: 'Djanho',  idade: 4, tipo: 'gato'  } // 15 + 10 + 4 + 4 = 
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

let idade = animais.filter((animal) => {
    return animal.tipo==='gato'
}).map(idd => {
    if(idd.idade = 1){
       return idd.idade = 15
    }else if(idd.idade = 2){
        return idd.idade = 25
    }else{
        return idd.idade = 0
    }
}).reduce((total, currentValue) => {
    return total + currentValue
})

console.log('Cães:',combine)
console.log('Gatos:',combin)
console.log('Ratos:',combi)
console.log(`A soma das idades dos gatos é: ${idade}`)