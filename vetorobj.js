
let gerenciaRedesSociais = () => {
    // cadastro das redes sociais
    let vetorRedesSociais = []
    for(let i=0;i<3;i++){
        let objeto = {
            codigo: Number(prompt(`Informe código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuários
    let vetorUsuarios = []
    let i = 0
    while (i<3){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        // só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 // índice do vetor de redes sociais
        while (!achou && j<3 ){ // sai ou porque achou ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto)// inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++ // prepara para ir ao próximo elemento
        }
        if (!achou){ // acabou o vetor
            alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
        }
        i++
    }

  // cadastro dos usuários
  /*
  let vetorUsuarios = []
  let i = 0
  while (i<5){
      let objeto = {
          login: prompt(`Informe o login do usuário`),
          nome: prompt(`Informe o nome do usuário`),
          codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
          qtdePosts: Number(prompt(`Informe a qtde de Posts`))
      }
      // só faremos isso se a rede social existir
      let achou = false // assumo que não encontrei a rede social
       // índice do vetor de redes sociais
      for(let j = 0; j < 5; j++ ){ // sai ou porque achou ou porque acabou o vetor
          if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
              vetorUsuarios.push(objeto)// inserimos
              achou = true
              alert(`Usuário inserido com sucesso`)
              break // sai do for
          }
      }
      if (!achou){ // acabou o vetor
          alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
      }
      i++
  }
  */
  // Exe1) o usuário informa a rede social, e o programa retorna quantos posts foram feitos
  let codigo = Number(prompt(`Informe o código da rede social`))
  // percorre vetor procurando
  let conta = 0
  for(let i=0;i<3;i++){ // percore o vetor vetorUsuarios
    if (vetorUsuarios[i].codigoRedeSocial == codigo){ // encontrei
        conta = conta + vetorUsuarios[i].qtdePosts
    }
  }
  if (conta == 0){
      console.log(`Não houve postagem ou rede social não existe`)
  }
  else {
      console.log(`A qtde de post na rede social ${codigo} foi ${conta}`)
  }


  // Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
  let vetor = []
  for (let i=0;i<3;i++){ // para cada rede social
      vetor[i] = 0  
      for(let j=0;j<3;j++){ // procura nos usuários
        if (vetorRedesSociais[i].codigo == vetorUsuarios[j].codigoRedeSocial){
            vetor[i] = vetor[i] + vetorUsuarios[i].qtdePosts
        }
      }
      // terminou de soma os posts de uma rede social
      alert(`A qtde de post da rede social ${vetorRedesSociais[i].codigo} é ${vetor[i]}`)
  }
  // Exe3) o usuário informa  o login do usuário, e o programa retorna quantos posts ele fez
  // solicitar usuário informar login
  let login = prompt(`Informe o login do usuario desejado`)
  // procura o login no vetor de usuários
  let somaPosts = 0
  let achou = false // não encontrei o usuário
  for(let i=0;i<3;i++){
      if (login == vetorUsuarios[i].login){ // achei o usuário procurado
            somaPosts = somaPosts + vetorUsuarios[i].qtdePosts
            achou = true // achou o usuário
      }
  }
  if (achou){
    alert(`O usuário com login ${login} realizou ${somaPosts}`)
  }
  else {    
    alert(`Usuário não encontrado`)
  }
  // Exe4) o programa retorna quantos posts foram feitos por cada usuário
  let vetorUsuariosPosts = []
  for(let i=0;i<3;i++){ // para cada usuário do vetor
    let achou = false // não achou
    for(let j=0;j<vetorUsuariosPosts.length;j++){ // verifica se o usuário já existe
    
        if (vetorUsuarios[i].login == vetorUsuariosPosts[j].login){ // usuário já existe
            // soma a qtde de posts do usuário
            vetorUsuariosPosts[j].qtde = vetorUsuariosPosts[j].qtde + vetorUsuarios[i].qtdePosts
            achou = true
        }
    }
    // usuário ainda não existe no vetor vetorUsuariosPosts, então vamos criar
    if (!achou){ // vamos criar usuário no vetor
        vetorUsuariosPosts.push({
            login: vetorUsuarios[i].login,
            qtde: vetorUsuarios[i].qtdePosts
        })
    }
  }
  console.log(vetorUsuariosPosts)
}