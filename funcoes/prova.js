let sistemaViagem = () => {

    let escolha
    let vetViagem = []
    
    do {
        escolha = Number(prompt(`Informe: \n1. Cadastrar Viagem \n2. Consultar preço médio das viagens  \n3. Consultar viagem por tipo \n4. consultar viagem mais barata de um país \n5. Sair`))
        switch(escolha){
            case 1: 
                    cadastraViagem(vetViagem)
                    break;
            case 2: 
                    window.alert('Preço médio: '+consultaPrecoMedio(vetViagem))
                    break
            case 3:
                    let tipo = Number(prompt('Selecione o tipo da viagem:\n1. Aéreo \n2. Terrestre'))
                    console.log(consultarTipo(vetViagem, tipo))
                    break
            case 4:
                    let pais = prompt('Digite o país de pesquisa').toLowerCase()
                    console.log(consultarMaisBarataPais(vetViagem, pais))
                    break
            case 5: 
                    window.alert('O programa será encerrado')
                    break;
            default:
                    window.alert("Opção Inválida!")
                    break
        }
    }
    while (escolha != 5)
}

let cadastraViagem = (vetViagem) => {
    let objeto = {
        codigo: Number(prompt('Insira o código da viagem')),
        pais: prompt('insira o país da viagem').toLowerCase(),
        cidade: prompt('insira o nome da cidade').toLowerCase(),
        preco: Number(prompt('Insira o preço')),
        tipo: Number(prompt('escolha o tipo: \n1. Aéreo \n2. Terrestre'))
    }
    let achou = false
    for(let i=0;i<vetViagem.length;i++){
        if(vetViagem[i].codigo == objeto.codigo){
            achou=true
        }
    }
    if(!achou){
        vetViagem.push(objeto)
        console.log('Viagem foi cadastrada com sucesso')
    }
    else{
        console.log("Essa viagem já existe")
    }
}

let consultaPrecoMedio = (vetViagem) => {
    let i=0
    let soma = 0
    while(i<vetViagem.length){
        soma += vetViagem[i].preco
        i++
    }
    return soma/vetViagem.length
}

let consultarTipo = (vetViagem, tipo) => {
    let vetTipo=[]
    for(let i=0;i<vetViagem.length; i++){
        if(vetViagem[i].tipo == tipo){
            vetTipo.push(vetViagem[i])
        }
    }
    return vetTipo
}

let consultarMaisBarataPais = (vetViagem, pais) => {
    let barato =1000000000000
    let res
    for(let i=0;i<vetViagem.length;i++){
        if((vetViagem[i].pais.includes(pais)==true) && (vetViagem[i].preco<barato)){
            barato = vetViagem[i].preco
            res = vetViagem[i]
        }
    }
    return res
}