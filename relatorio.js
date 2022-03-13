// Percorrer um objeto e extrair as suas informações em um formato legível
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

let relatorio = "";

for (let i in cliente){
    if(typeof cliente[i] === "object" || typeof cliente[i] === "function"){
        continue;
    }else{
        relatorio += `
        ${i} ==> ${cliente[i]}`
    }
}
console.log(relatorio)