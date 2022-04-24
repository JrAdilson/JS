const {edGalho, edFolha} = require('./arrays')

function junt(lista, list){
    let listaFinal = []
    let posicAtual1 = 0;
    let posicAtual2 = 0;
    let atual = 0
    while(posicAtual1 < lista.length && posicAtual2 < list.length){
        let produtoAtualLista = lista[posicAtual1]
        let produtoAtualList = list[posicAtual2]
        if(produtoAtualLista.preco < produtoAtualList.preco){
            listaFinal[atual] = produtoAtualLista
            posicAtual1++
        }else{
            listaFinal[atual] = produtoAtualList
            posicAtual2++
        }
        atual++
    }
    while(posicAtual1 < lista.length){
        listaFinal[atual] = lista[posicAtual1]
        posicAtual1++
        atual++
    }
    while(posicAtual2 < list.length){
        listaFinal[atual] = list[posicAtual2]
        posicAtual2++
        atual++
    }
    return listaFinal
}
console.log(junt(edGalho, edFolha))