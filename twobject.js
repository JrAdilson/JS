const cliente = {
    nome: "Teste",
    idade: 3,
    cpf: "91919191911",
    email: "teste@teste.com",
    fone: ["999992925","9992582944"]
}

cliente.dependente = {
    nome: ["Pai","Mae"],
    parentesco: "Família",
    data: "20/03/2011"
}

console.log(cliente)
cliente.dependente.nome = "Mae"
console.log(cliente)