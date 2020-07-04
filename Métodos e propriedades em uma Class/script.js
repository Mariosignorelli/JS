class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir(){
        console.log('auauauaua')
    }
}
Cachorro.prototype.raca = 'srd';
Cachorro.prototype.patas = 4;
let labrador =new Cachorro('labrador', 'Amarelo');

console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raca);
