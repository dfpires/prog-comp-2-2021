let principal = () => {
    let opcao
    let vetor = []
    let matriz = []
    do {
        opcao = Number(prompt('\n1. Cadastra 1 Carro \n2. Cadastra todas as vendas \n3. Sair '))
        switch(opcao){
            case 1: cadastraCarro(vetor)
                    break
            case 2: cadastraVendas(matriz, vetor)
                    break
            case 3: calculaVendasCarro(matriz, vetor)
                    break
            case 4: calculaVendasTrimestre(matriz)
                    break
            case 5: alert('Programa será encerrado')
                    break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 3)
}
let cadastraCarro = (vetor) => {
    let objeto = {
        modelo: prompt("Informe o modelo do carro"),
        marca: prompt("Informe a marca do carro")
    }
    vetor.push(objeto)
}
let cadastraVendas = (matriz, vetor) => {
    for(let i=0;i<vetor.length;i++){ // para cada carro cadastrado
        matriz[i] = [] // iniciliza a linha da matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe o total de vendas da marca ${vetor[i].marca}, do modelo ${vetor[i].modelo} e no ${j} trimestre`))
        }
    }
}

let calculaVendasCarro = (matriz, vetor) => {
    for(let i=0;i<vetor.length;i++){ // para cada carro
        let total = 0
        for(let j=0;j<4;j++){ // para cada trimestre
            total = total + matriz[i][j]
        }
        alert(`O total vendido do carro marca ${vetor[i].marca} e modelo ${vetor[i].modelo} é ${total}`)
    }
}

let calculaVendasTrimestre = (matriz) => {
    for(let j=0;j<4;j++){ // para cada trimestre
        let total = 0
        for(let i=0;i<vetor.length;i++){ // para cada carro
            total = total + matriz[i][j]
        }
        alert(`O total vendido no trimestre ${j} foi ${total}`)
    }
}
