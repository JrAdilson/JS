// 'Joao', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

const listaChamada= [ 
    'Joao','Ana','Caio','Lara','Marjorie','Leo'
]
// No splice o primeiro valor é o primeiro em que quero remover, o segundo a quantidade que quero tirar e em terceiro, a String que quero adicionar.
listaChamada.splice(1,2,'Rodrigo');
listaChamada.splice(3,3,'Adilson','Milena','Alaska');
console.log(listaChamada)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)