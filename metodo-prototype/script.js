function Cachorro(raca,patas,cor){
    this.patas = patas;
    this.raca = raca;
    this.cor = cor;  
}
Cachorro.prototype.uivar = function(){
    console.log("auuuuuu");
}
Cachorro.prototype.latir = function(){
    console.log('au au au')
}

let husk = new Cachorro('husk',4 ,'cinza');
husk.uivar();
husk.latir();
