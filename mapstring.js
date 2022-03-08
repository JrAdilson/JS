let mapS = ['ana Julia', 'Caio vinicius', 'BIA silva']
// a meta é padronizar a lista com alunos e apenas válido letras maiúsculas.


const mapAtt = mapS.map(nome => nome.toUpperCase()) // Método toUpperCase() coloca os nome das arrays em maiúsculo.
console.log(mapAtt);

// Map x Foreach
/*
Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.
*/