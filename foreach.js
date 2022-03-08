const notas = [10,6.5,8,7.5]
let soma = 0; // temp
// ForEach = para cada nota, executa a soma = soma + nota (idêntico ao for)
// Tipo de método callback (Parâmetro dessa função não é um dado e sim uma função)
notas.forEach( nota => {
    soma += nota;
})
let media = soma/notas.length;
console.log(media)

