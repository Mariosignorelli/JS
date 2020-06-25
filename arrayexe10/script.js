function Cachorro(raca,patas,cor){
    this.patas = patas;
    this.raca = raca;
    this.cor = cor;
    this.uivar = function(){
        console.log("auuuuuu");
    }

}
let husk = new Cachorro('husk',4 ,'cinza');
husk.uivar();
