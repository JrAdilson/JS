// Aproveitar cliente que ja existe e criar um novo tipo de cliente para contas poupanças
// Criar uma classe Cliente - inicio POO em JS.

class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibir(){
        console.log(this.saldo)
    }
}
// Herança.
class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoup){
    super(nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}
const alaska = new ClientePoupanca('Alaska','123','@@@',150,200)
alaska.depositar(560);
alaska.depositarPoup(1)
alaska.exibir();
console.log(alaska)