
let carro = {
    portas:4,
    frios:'abs',
}
let adicionais = {
    teto_solar:true,
    camera_de_re:true,
}
console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);
