
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    let codigo
    let mes
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Procura venda por mês e vendedor \n4. Soma venda por vendedor \n5. Mostra a maior venda do mês \n6. Valor por mês \n7. Sair`))
        switch(opcao){
            case 1: cadastraVendedor(vetVendedores)
                    break
            case 2: cadastraVenda(vetVendas)
                    break
            case 3: codigo = Number(prompt(`Informe o código do vendedor`))
                    mes = Number(prompt(`Informe o mês da venda`))
                    consultaVendasCodigoMes(vetVendas, codigo, mes)
                    break
            case 4: codigo = Number(prompt(`Informe o código do vendedor`))
                    consultaVendasCodigo(vetVendas, codigo)
                    break
            case 5: mes = Number(prompt(`Informe o mês de interesse`))
                    consultaVendedor(vetVendas, mes)
                    break
            case 6: consultaVendasMes(vetVendas)
                    break
            case 7: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 7)
}

let cadastraVendedor = (vetVendedores) => {
    let objeto = {
        codigo: Number(prompt(`Informe código`)),
        nome: prompt(`Informe nome`),
        rg: prompt(`Informe rg`) // 23.646.356-1
    }
    // verifica se já tem outro vendedor com o mesmo código
    let achou = false
    // vetVendedores.length retorna o tamanho do vetor
    for(let i=0; i < vetVendedores.length;i++){
        if (vetVendedores[i].codigo == objeto.codigo){
            achou = true // achei - não posso cadastrar      
        }
    }
    if (!achou){
         // adiciona objeto no vetor
        vetVendedores.push(objeto)
        alert(`Vendedor cadastrado com sucesso`)
    }
    else {
        alert(`Vendedor já existe com este código`)	
    }
    console.log(vetVendedores)
}

let cadastraVenda = (vetVendas) => {
    let objeto = {
        codigo: Number(prompt(`Informe código do vendedor`)),
        mes: Number(prompt(`Informe mês da venda`)),
        valor: Number(prompt(`Informe o valor da venda`)) 
    }
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        // não podemos cadastrar duas vendas para um mesmo vendedor no mesmo mês
        if ((vetVendas[i].codigo == objeto.codigo) && (vetVendas[i].mes == objeto.mes)){
            achou = true // encontrei - não podemos cadastrar venda
        }
    }
    if (!achou){
        vetVendas.push(objeto)
    }
    else {
        alert(`Já existe vende deste vendedor neste mês`)
    }
    console.log(vetVendas)
}

let consultaVendasCodigoMes = (vetVendas, codigo, mes) => {
    // percorre vetor de vendas
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
            console.log(`O valor da venda do funcionário ${codigo} no mês ${mes} foi ${vetVendas[i].valor}`)
            achou = true
        }
    }
    if (!achou){
        console.log(`Venda não encontrada para este funcionário neste mês`)
    }
}

let consultaVendasCodigo = (vetVendas, codigo) => {
     // percorre o vetor de vendas
     let soma = 0
     for(let i=0;i<vetVendas.length;i++){
         if (vetVendas[i].codigo == codigo){
             soma = soma + vetVendas[i].valor
         }
     }
     if (soma == 0){
         console.log(`Venda não encontrada para este funcionário, ou venda igual o 0`)
     }
     else {
         console.log(` O total de vendas do vendedor ${codigo} foi ${soma}`)
     }
}

let consultaVendedor = (vetVendas, mes) => {
    let maiorValor = 0
    let vendedorMaisVendeu = 0 
    for(let i=0;i<vetVendas.length;i++){
        if (vetVendas[i].mes == mes){
            if (vetVendas[i].valor > maiorValor){
                maiorValor = vetVendas[i].valor // atualiza o maior valor
                vendedorMaisVendeu = vetVendas[i].codigo // atualiza vendedor
            }
        }
    }
    console.log(`O vendedor que mais vendeu foi ${vendedorMaisVendeu} com ${maiorValor}`)
}

let consultaVendasMes = (vetVendas) => {
    let vetMeses = [0,0,0,0,0,0,0,0,0,0,0,0]
    // percorre o vetor de vendas
    for(let i=0;i<vetVendas.length;i++){
        let aux = vetVendas[i].mes // mês da venda
        vetMeses[aux-1] = vetMeses[aux-1] + vetVendas[i].valor
    }
    console.log(vetMeses)
}