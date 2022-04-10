class JogadorFutebol {
    constructor(name) {this.name = name}
    chutar = () => {console.log(this.name + 'CHUTOU É GOL')}
}
JogadorFutebol.prototype.sofreuFalta = function(){
    console.log(this.name + ' se jogou')
}
let Neymar = new JogadorFutebol('Neymar')
Neymar.chutar()
Neymar.sofreuFalta()