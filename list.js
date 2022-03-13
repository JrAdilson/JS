// Adicionar mais um dependente.
const cliente = {
    nome: "Teste",
    idade: 3,
    cpf: "91919191911",
    email: "teste@teste.com",
    fone: ["999992925","9992582944"],
    dependentes: [{
        nome: 'Etset',
        parentesco: "No",
        data: '13/03/2022'
    }] // Umindice de um Array.
}
// Sempre vai adicionar no ultimo indice.
cliente.dependentes.push({
    nome: 'AAGJ',
    parentesco: 'No One',
    data: '14/05/2022'
})
cliente.dependentes.push({
    nome: 'AAGJ1',
    parentesco: 'No One',
    data: '15/05/2022'
})
console.log(cliente);

// Filtrar por uma determinação, por exemplo a data.

const t = cliente.dependentes.filter(dependente => dependente.data==='14/05/2022')
console.log(t)