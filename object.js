// Exemplo de Objetos - Acessando dados com objetos

const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "91919191911",
    email: "teste@teste.com"
}

console.log(cliente.nome);
console.log(cliente.cpf.substring(0,11));

const key = ["nome","idade","cpf","email"]

console.log(cliente[key[2]])

key.forEach(info=>console.log(cliente[info]))

cliente.a="teste" // adicionar algo no objeto cliente.

console.log(cliente);