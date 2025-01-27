// Filtrar e Mapear Dados de Filmes
// API: OMDb API (https://www.omdbapi.com)
//   Crie uma função que faça uma requisição para buscar um filme pelo título.
//  Armazene o resultado em um array de filmes e use .map() para criar uma lista com apenas título, ano e diretor.

// Use .filter() para exibir apenas os filmes lançados depois do ano 2000.

// Envie a URL para o site funcionando com a resposta
// (2 Pontos)
let teste = "breaking+bad"
let arrayFilmes = []

function pesquisarTitulo (titulo){
    let xhr = new XMLHttpRequest()
    
    xhr.open("GET", `https://www.omdbapi.com/?apikey=4f4a6651&t=${titulo}`) //tratar a futura variável para adicionar + nos espaços brancos
    xhr.send()
    
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 ){
            let apiData = this.responseText // apidata segura os dados de retorno
            console.log(apiData)
           let arr = JSON.parse(apiData)
           arrayFilmes.push(arr.Title)
        }
    }
}

pesquisarTitulo(teste)

//boilerplate ; wrappar esta porra toda em uma função
//função que retorna para um array objetodaAPI.filme (provavelmente via addeventlistener)


//http://www.omdbapi.com/?apikey=4f4a6651& colocar colchetes entre a api se n funfar

//http:www.omdbapi.com/?apikey=4f4a6651&t=breaking+bad pronto