Array.prototype.cataFruta = function(cb){
    for(var i=0; i< this.length; i++){
        cb.call(this, this[i], i)
    }
}
var frutas = ['Laranja','Maca','Morango','Pera','Mexerica']
frutas.cataFruta((element, index) => console.log("Fruta: " + element + ", sua posição é " + index))