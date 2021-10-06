// cria a função
let sistemaVendas = () => {
    // vetor de meses
    let meses = ["Janeiro", "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    // declara a matriz
    let matriz = []
   
    for(let i=0;i<12;i++){ // para cada mês
        matriz[i] = []
        alert(`Informe as vendas do mês ${meses[i]}`)
        for(let j=0;j<4;j++){ // para cada semana
            matriz[i][j]= Number(prompt(`Informe o valor vendido na ${j+1}ª. semana `))
        }
    }
    let soma
    for(let i=0;i<12;i++){ // para cada mês
        soma = 0
        for(let j=0;j<4;j++){ // para cada semana
            soma = soma + matriz[i][j]
        }
        // acabou de somar o mês
        alert(`Total vendido no mês ${meses[i]} foi ${soma}`)
    }
}