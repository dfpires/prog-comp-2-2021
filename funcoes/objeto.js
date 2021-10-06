


// vamos criar um objeto
let carro1 = new Object()
carro1.marca = "Chevrolet"
carro1.modelo = "Onix"
carro1.ano = 2019
carro1.cor = "preta"

console.log(carro1)

let carro2 = new Object()
carro2.marca = "Fiat"
carro2.modelo = "Palio"
carro2.ano = 2014
carro2.cor = "branca"

console.log(carro2)

// vamos criar um objeto
let time1 = {
    nome: "Corinthians",
    mundiais: 2,
    apelido: "Timão",
    localizacao: "SP",
    torcedores: 1000000
}

console.log(time1)

let time2 = {
    nome: "Santos",
    mundiais: 1,
    apelido: "Peixe",
    localizacao: "Santos",
    torcedores: 2
}

console.log(time2)

let nuvem1 = new Object()

nuvem1["local"] = "Amazon"
nuvem1["disco"] = "256 de SSD"
nuvem1["ram"] = 6


console.log(nuvem1)


// cria vetores com objetos
// A
let vetor = []
for(let i=0;i<4;i++){
    // cria objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe qtde do produto`)),
        preco: Number(prompt(`Informe preço do produto`))
    }
    // adiciona o objeto no vetor
    vetor.push(objeto)
}

// calcula a média de preço dos produtos
let soma = 0

for(let i=0;i<4;i++){

    soma = soma + vetor[i].preco

}

console.log(`A média é de ${soma/4}`)