// Filtrar e Mapear Dados de Filmes
// API: OMDb API (https://www.omdbapi.com)
//   Crie uma função que faça uma requisição para buscar um filme pelo título.
//  Armazene o resultado em um array de filmes e use .map() para criar uma lista com apenas título, ano e diretor.

// Use .filter() para exibir apenas os filmes lançados depois do ano 2000.

// Envie a URL para o site funcionando com a resposta
// (2 Pontos)
let teste = "breaking+bad"
let arrayFilmes = []
let listaTratada = []
let listaTratada2 = []
function pesquisarTitulo (titulo){
    let xhr = new XMLHttpRequest()
    
    xhr.open("GET", `https://www.omdbapi.com/?apikey=4f4a6651&t=${titulo}`) //tratar a futura variável para adicionar + nos espaços brancos
    xhr.send()
    
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 ){
            arrayFilmes = this.responseText // arrayFilmes segura os dados de retorno
            console.log(arrayFilmes)
            arrayFilmes = JSON.parse(arrayFilmes)
            console.log(`debug pós json.parse${arrayFilmes}`)

            listaTratada = Object.keys(arrayFilmes).forEach((key) => { 
                if (key === "Title" || key === "Year" || key === "Director"){
                    //(arrayFilmes[key] === arrayFilmes.Title || arrayFilmes[key] === arrayFilmes.Year || arrayFilmes[key] === arrayFilmes.Director)
                    listaTratada2.push(arrayFilmes[key]) //gambiarra
                } 
                
            })
        }
    }
    //move pro escopode  onreadystatechange caso n funcione
}

pesquisarTitulo(teste)



//http://www.omdbapi.com/?apikey=4f4a6651& colocar colchetes entre a api se n funfar

//http:www.omdbapi.com/?apikey=4f4a6651&t=breaking+bad pronto