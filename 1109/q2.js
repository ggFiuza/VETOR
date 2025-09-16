let i = 0
const tipo = [i]
let indi = 0

for(i=0;i<=9;i++){
    tipo[i] = prompt("Digite o tipo sanguíneo da pessoa")
    tipo[i] = Number(tipo[i])
}

for (i=0;i<=9;i++){
    console.log("Tipo sanguíneo "+ i +" :")
    console.log("",+tipo[i])
}