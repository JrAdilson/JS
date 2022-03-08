const livros = require('./order2')
const precos = [25,15,30,50,45,20]
let barato = 0

for (let atual = 0; atual < livros.length; atual++){
    // Código
    if(livros[atual].preco<livros[barato].preco){
        barato = atual;
    }
}
console.log(`O livro mais barato custa ${livros[barato].preco} e o título é: ${livros[barato].titulo}`);