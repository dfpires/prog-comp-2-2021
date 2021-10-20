
let sistemaAcademico = () => {
    // declaração das estrut dados
    let vet = []
    let mat = []
    for(let i=0;i<3;i++){
        // para cada aluno
        // insere nome do aluno no objeto
        let objeto = {
            nome:prompt(`Informe nome do aluno ${i+1}`),
            media: 0 
        }
        // insere o objeto no vetor
        vet.push(objeto)
        mat[i] = [] // aloca espaço na memória para a matriz
        alert(`Informe 5 notas do aluno ${vet[i].nome}`)
        for(let j=0;j<5;j++){
            // adiciona a nota na matriz
            mat[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }
    // calcula média
    let turma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            // soma as notas de um aluno
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 5 // calcula a média 
        turma = turma + vet[i].media
        if (vet[i].media >= 6){
            alert(`Aluno ${vet[i].nome} foi aprovado`)
        }  
        else if (vet[i].media >=3){
            alert(`Aluno ${vet[i].nome} está de exame`)
        }
        else {
            alert(`Aluno ${vet[i].nome} foi reprovado`)
        }
    }
    turma = turma / 3
    alert(`A média da turma é ${turma}`)
}