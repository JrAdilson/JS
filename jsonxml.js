/*
JSON é um acrônimo de JavaScript Object Notation ou “notação de objeto JavaScript”.
Como o próprio nome já sugere, JSON é um formato que utiliza a sintaxe de objetos e arrays do JavaScript. 
É muito versátil e se tornou a forma mais comum de estrutura para transferência de dados entre cliente/servidor, 
e tem sido utilizado mesmo em programas que não utilizam JavaScript. A estrutura também é mais fácil de compreender, 
comparada com outro formato de transferência de dados, o XML:
*/

// Exemplo JSON:
/*{
    "id": 59,
    "titulo": "ECMAScript 6",
    "autor": "A",
    "categoria": "programação"
  }
*/

/* Exemplo XML:
 <livro id="59">
 <titulo>ECMAScript 6</titulo>
 <autor>A</autor>
 <categoria>programação</categoria>
</livro>
*/

// Conversão objeto para JSON:
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

// Processo inverso (JSON to Object)
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)