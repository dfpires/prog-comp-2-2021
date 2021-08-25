
let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    do {
        opcao = prompt(`Informe: \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Sair`)
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
                    break
            case 2:
                    break
            case 3: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 3)
}