
let sistemaImobiliaria = () => {
    let opcao
    let vetImoveis = [] // vetor de imóveis
    do {
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1: cadastraImovel(vetImoveis)
                    break
            case 2: let tipo = prompt(`Qual tipo do imóvel A ou C`).toUpperCase()
                    consultaImoveis(vetImoveis, tipo)
                    break
            case 3: consultaValorTotal(vetImoveis)
                    break
            case 4: consultaImoveisGrandes(vetImoveis)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

let cadastraImovel = (vetImoveis) => {
    let objeto = {
        codigo: Number(prompt(`Informe codigo do imóvel`)),
        tamanho: Number(prompt(`Informe tamanho do imóvel`)),
        tipo: prompt(`Informe tipo do imóvel. A p/ Apartamento e C p/ Casa`).toUpperCase(),
        valor: Number(prompt(`Informe valor do imóvel`)),
    }
    let achou = false
    for(let i=0;i<vetImoveis.length;i++){
        if (vetImoveis[i].codigo == objeto.codigo){
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou){
        vetImoveis.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }
}

let consultaImoveis = (vetImoveis, tipo) => {
    for(let i=0;i<vetImoveis.length;i++){
        if (vetImoveis[i].tipo == tipo){
            console.log(vetImoveis[i])
        }
    }
}

let consultaValorTotal = (vetImoveis) => {
    let soma = 0
    for(let i=0;i<vetImoveis.length;i++){
        soma = soma + vetImoveis[i].valor
    }
    alert(`O valor total dos imóveis é ${soma}`)
}

let consultaImoveisGrandes = (vetImoveis) => {

    for(let i=0;i<vetImoveis.length;i++){
        if (vetImoveis[i].tamanho > 100){
            console.log(vetImoveis[i])
        }
    }
}

