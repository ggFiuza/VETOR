let filmes = []

for (let i = 0; i < 6; i++) {
    let nome = prompt("Digite o nome do filme " + (i + 1) + ":")
    let nota = parseFloat(prompt("Digite a nota do filme " + (i + 1) + " (0 a 10):"))
    filmes.push({ nome: nome, nota: nota })
}

while (true) {
    let opcao = prompt("Escolha uma opção:\n" +
                       "a) Imprimir dados de 1 filme\n" +
                       "b) Avaliar um filme\n" +
                       "c) Alterar dados de um filme\n" +
                       "d) Finalizar execução e imprimir todos os dados")

 
    if (opcao === 'a') {
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5):"))
        if (indice >= 0 && indice < filmes.length) {
            console.log("Nome do filme: " + filmes[indice].nome)
            console.log("Nota do filme: " + filmes[indice].nota)
        } else {
            alert("Índice inválido!")
        }
    } 
    

    else if (opcao === 'b') {
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5) para avaliar:"))
        if (indice >= 0 && indice < filmes.length) {
            let novaNota = parseFloat(prompt("Digite a nova nota para o filme (0 a 10):"))
            filmes[indice].nota = (filmes[indice].nota + novaNota) / 2 // Calcula a média das notas
            console.log("Nota média atualizada para o filme " + filmes[indice].nome + ": " + filmes[indice].nota.toFixed(2))
        } else {
            alert("Índice inválido!")
        }
    } 
    
    
    else if (opcao === 'c') {
        let indice = parseInt(prompt("Digite o índice do filme (0 a 5) para alterar os dados:"))
        if (indice >= 0 && indice < filmes.length) {
            let novoNome = prompt("Digite o novo nome do filme:")
            let novaNota = parseFloat(prompt("Digite a nova nota do filme (0 a 10):"))
            filmes[indice].nome = novoNome // Atualiza o nome do filme
            filmes[indice].nota = novaNota // Atualiza a nota do filme
            console.log("Dados do filme atualizados:")
            console.log("Nome do filme: " + filmes[indice].nome)
            console.log("Nota do filme: " + filmes[indice].nota)
        } else {
            alert("Índice inválido!")
        }
    } 
    

    else if (opcao === 'd') {
        console.log("Dados de todos os filmes:")
        filmes.forEach((filme, index) => {
            console.log("Índice: " + index + ", Nome: " + filme.nome + ", Nota: " + filme.nota)
        })
        break 
    } 
    
  
    else {
        alert("Opção inválida!")
    }
}
