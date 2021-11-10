// função anônima é aquela que não tem nome

let vetor = [1, 2, 3, 4, 5]
vetor.forEach( (a) => {
    console.log(`Valor do elemento ${a}`)
})

let vetor2 = [10, 20, 30, 40, 50]
vetor2.forEach( (elemento, posicao) => {
    console.log(`Valor do elemento ${elemento} e sua posição ${posicao}`)
})

let vetor3 = [10, 20, 30, 40, 50]
vetor3.forEach( (elemento, posicao) => {
    if (posicao % 2 == 0) // mostra elementos na posição par
    console.log(`Valor do elemento ${elemento} e sua posição ${posicao}`)
})
// vetor de objetos
let filmes = [
    {
        nome: "Vingadores",
        ano: 2018,
        classificacao: "aventura"
    },
    {
        nome: "Batman",
        ano: 2019,
        classificacao: "suspense"
    },
    {
        nome: "X-Men",
        ano: 2020,
        classificacao: "ficção"
    }
]
// percorrer os filmes
// elemento representa cada objeto do vetor
filmes.forEach((elemento) => {
    console.log(`Nome do filme ${elemento.nome}, Ano: ${elemento.ano} `)
})

// função map
// pode alterar o conteúdo do vetor original
let vetor4 = [9, 8, 7, 6, 5]
vetor4 = vetor4.map( (elemento) => {
    return Math.pow(elemento, 2) // eleva o elemento ao quadrado
})
console.log(vetor4)

// exemplo com a função reduce
let vetor5 = [5, 9, 12, 15, 18]
// vetor5(5, 9) => 14
// vetor5(14, 12) => 26
// vetor5(26, 15) => 41
// vetor5(41, 18) => 59  
let soma = vetor5.reduce((total, elemento) => {
    return total + elemento
})

// exemplo da função filter
let vetor7 = [6, 9, 3, 7, 10]
let pares = vetor7.filter( (elemento) => {
    return elemento % 2 == 0
})
console.log(pares)

// usando o for
let carros = ["BMW", "Volvo", "Mini"];
for (let elemento of carros) {
    console.log(`${elemento}`)
}