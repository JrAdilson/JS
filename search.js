const alunos = ['Adilson', 'Milena', 'Alaska']
const nota = ['10', '9','1000']

let listaUnif = [alunos,nota]
// Primeiro é o indice (quantidade de arrays) e depois as posições da array
console.log(listaUnif[0][0],listaUnif[1][0])
// include = boolean (true/false)
const exibeNN = (nomeAluno) => {
    if(listaUnif[0].includes(nomeAluno)){
        let indice = listaUnif[0].indexOf(nomeAluno);
        return listaUnif[0][indice] + listaUnif[1][indice];
    }else{
        return "Aluno não está cadastrado."
    }
}
console.log(exibeNN("Alaska"))