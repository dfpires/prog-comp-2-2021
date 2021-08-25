
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Sair`))
        switch(opcao){
            case 1: let objeto = {
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
                    break
            case 2: let objeto1 = {
                        codigo: Number(prompt(`Informe código do vendedor`)),
                        mes: Number(prompt(`Informe mês da venda`)),
                        valor: Number(prompt(`Informe o valor da venda`)) 
                    }
                    let achou1 = false
                    for(let i=0;i<vetVendas.length;i++){
                        if ((vetVendas[i].codigo == objeto1.codigo) && (vetVendas[i].mes == objeto1.mes)){
                            achou1 = true // encontrei - não podemos cadastrar venda
                        }
                    }
                    if (!achou1){
                        vetVendas.push(objeto1)
                    }
                    else {
                        alert(`Já existe vende deste vendedor neste mês`)
                    }
                    console.log(vetVendas)
                    break
            case 3: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 3)
}