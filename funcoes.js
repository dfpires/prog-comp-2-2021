function principal(){
    
    let opcao
    let idade// escopo local -> FUNCIONA NO LOCAL ONDE FOI DEFINIDO
    let peso, altura
    let vetor = [] // declaração do vetor
    do {
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4. F4 5. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe sua idade`))
                    idade = f1(idade)
                    break
            case 2: peso = Number(prompt(`Informe seu peso`))
                    f2(idade, peso)
                    break
            case 3:  idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: vetor.push(1) // adicionada 1
                    vetor.push(2)  // adiciona 2
                    vetor.push(3) // adiciona 3
                    f4(vetor) // passando um vetor como parâmetro de uma função
                    // passar um vetor como parâmetro é passar uma referência do vetor
                    alert(vetor)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5 )
    
}
// função que recebe parâmetro
function f1(idade){
    // let idade = 10
     alert(`Valor de idade ${idade}`)
     idade = idade + 10
     return idade // retorna o resultado da função
}
// função que recebe parâmetro
function f2(idade, peso){
     alert(`Valor de idade ${idade} e do peso ${peso}`)
}
// função que recebe parâmetro
function f3(idade, peso, altura){
    alert(`Valor de idade ${idade}, valor do peso ${peso} e valor da altura ${altura}`)
}

function f4(vetor){
    // alterando o valor do vetor
    vetor[0] = vetor[0] + 10
    vetor[1] = vetor[1] + 10
    vetor[2] = vetor[2] + 10
}