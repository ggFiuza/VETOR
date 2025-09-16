let i = 0
const precos = [i]
let indi = 0

for(i=0;i<=4;i++){
    precos[i] = prompt("Digite o preço do produto")
    precos[i] = Number(precos[i])
}

let maior = Math.max(...precos)

const indiceDoMaior = precos.indexOf(maior); 

console.log("O maior número é",+ maior)
console.log("O maior número tem o indice",+ indiceDoMaior)