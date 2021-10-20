let exe10 = () => {

    let mat = []
    for(let i=0;i<5;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe um número da linha ${i+1} e coluna ${j+1}`))
        }
    }
    // soma os elementos da diagonal principal
    let diagonalPrincipal = 0
    for(let i=0;i<5;i++){
        diagonalPrincipal = diagonalPrincipal + mat[i][i]
    }
    alert(diagonalPrincipal)
    // soma dos elementos da linha 4
    let linha4 = 0
    for(let j=0;j<5;j++){
        linha4 = linha4 + mat[3][j]
    }
    alert(linha4)
    // soma dos elementos da linha 4
    let coluna2 = 0
    for(let i=0;i<5;i++){
        coluna2 = coluna2 + mat[i][1]
    }
    alert(coluna2)
    // soma os elementos da diagonal secundária
    let diagonalSecundaria = 0
    for(let i=0;i<5;i++){
        diagonalSecundaria = diagonalSecundaria + mat[i][4-i]
    }
    alert(diagonalSecundaria)
}