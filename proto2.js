String.prototype.concatText = function(){
    return String(this) + ' ' + "TEXTO ADICIONADO"
}
console.log('qualquer coisa'.concatText())

/* SINTAXE

Tipo Variavel . prototype . FUNCAO = function() { return this}
*/

Number.prototype.remove10 = function(){
    return +this - 10
}
//Number.prototype.remove15 = () => +this - 15
console.log((55).remove10())
//console.log((55).remove15())