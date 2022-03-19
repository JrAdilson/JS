function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo) // Chamando o cliente e chamando todas as propriedades (selecionadas)
    this.saldoPoup = saldoPoup;
}

const alaska = new clientePoupanca('Alaska','1','e',1500,200) 
// New = Palavra reserva para dizer que está utilizando a partir de uma função (cliente), estamos criando uma nova instância.
console.log(alaska)

clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
alaska.depositarPoup(50)
console.log(alaska.saldoPoup)