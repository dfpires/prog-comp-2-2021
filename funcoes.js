function principal(){
    
    let opcao
    let idade// escopo local -> FUNCIONA NO LOCAL ONDE FOI DEFINIDO
    let peso, altura
    do {
        opcao = Number(prompt(`Digite 1. F1 2. F2 3. F3 4. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe sua idade`))
                    f1(idade)
                    break
            case 2: idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    f2(idade, peso)
                    break
            case 3:  idade = Number(prompt(`Informe sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 4 )
    
}
// função que recebe parâmetro
function f1(idade){
    // let idade = 10
     alert(`Valor de idade ${idade}`)
}
// função que recebe parâmetro
function f2(idade, peso){
     alert(`Valor de idade ${idade} e do peso ${peso}`)
}
// função que recebe parâmetro
function f3(idade){
    alert(`Valor de idade ${idade}`)
}