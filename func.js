// Adicionar propriedade que permita ações, para fazer operações bancárias.

const cliente = {
    nome: "Teste",
    idade: 3,
    cpf: "91919191911",
    email: "teste@teste.com",
    fone: ["999992925","9992582944"],
    dependentes: [
        {
            nome: 'Etset',
            parentesco: "No",
            data: '13/03/2022' },
        {
            nome: 'Testinho',
            parentesco: 'Yes',
            data: '14/03/2022'
        }
    ],
    saldo: 1500,
    depositar: function(valor)
    {
        this.saldo += valor;
    }
}
console.log(cliente.saldo)
cliente.depositar(5);
console.log(cliente.saldo)