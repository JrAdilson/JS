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

const alaska = new Cliente('Alaska','123','@@@',150)
alaska.depositar(50);
alaska.exibir();