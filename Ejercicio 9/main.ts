interface Oveja {
    name: string,
    color: string
}
const ovejas: Oveja[] = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

contarOvejas(ovejas)
function contarOvejas(ovejas) {
for (let oveja of ovejas){
let ove = oveja.name.toLowerCase();

if (ove.indexOf("n") > -1 && ove.indexOf("a") > -1 && oveja.color == "rojo") {
console.log("Estas ovejas son rojas y contiene su nombre n y a: " + oveja.name)
}else{
console.log("Estas ovejas 'NO' son: " + oveja.name)
}  
}
return ovejas
}