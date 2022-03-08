const num = [100,200,300,400,500,600]

for(let i = 0; i < num.length; i++){
    console.log(i,num[i]);
}

// Média das notas (Com FOR) - 10, 6.5, 8 e 7.5

const notas = [10,6.5,8,7.5]
let soma = 0; // variavel auxiliar (temp)
// a cada loop, acessa a soma e soma com o valor de nota[indice]
for(let i=0; i < notas.length; i++){
    soma += notas[i]
    // += soma a variavel + o desejado
}
let media = soma/notas.length
console.log(media);