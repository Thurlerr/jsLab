
        //Q1
        let invBtn = document.getElementById("invBtn")

        invBtn.addEventListener("click", () => {
            const fraseInputada = document.getElementById("caixa")
            const fraseE = fraseInputada.value
            inverteFrase(fraseE)
        })

        function inverteFrase (frase){
        
        let arraySplitado = frase.split("")
        arraySplitado.reverse()
        fraseFinal = arraySplitado.join("")
        let retornoTela = document.createElement("p") //cria na memória um p
        retornoTela.textContent = fraseFinal //enfia conteúdo no p
        let corpo = document.querySelector("body") //seleciona um local no DOM
        corpo.appendChild(retornoTela) //insere o p criado no DOM no local selecionado
        return fraseFinal
        }

        //Q2
        const vogBtn = document.getElementById('vogBtn')
        
        //esse cara 
        vogBtn.addEventListener('click', () => { 
            const marcaVogal = document.getElementById("caixa").value
            marcaVogal.split("") //refatorar aqui para mudar de string para array
            console.log([...marcaVogal])
            //o retorno do método .map vai ser o valor de resultado
            const resultado = [...marcaVogal].map(letra => { //tirar a gambiarra do spread na refatoração
                if ("aeiouAEIOU".includes(letra)){
                    return `<b>${letra}</b>` //dentro da backtick ja cospe a tag pra por o codigo em negrito
                }
            return letra //esse return modifica resultado?
            }).join("")
        
            let retornoTelaQ2 = document.createElement("p") //cria p na memoria
            retornoTelaQ2.innerHTML = resultado //e agora viado? 
            console.log(`debug: ${resultado}`)
            let corpo = document.querySelector("body") //seleciona um local no DOM
            corpo.appendChild(retornoTelaQ2) //insere o p criado no DOM no local selecionado
        })

        //Q3
        contadorBtn = document.querySelector("#contadorBtn")
        
        contadorBtn.addEventListener('click', () => {
        let contadorPalavras = {} //objeto que vai cuspir o resultado
        let input = document.querySelector('#caixa')
        input = input.value.split(" ")

            //popula o objeto
            input.forEach(palavra => {
            
            if(contadorPalavras.hasOwnProperty(palavra)){
                contadorPalavras[palavra]++
            }else{
                contadorPalavras[palavra] = 1
            }
            })

            let retornoTela = document.createElement("p") //cria na memória um p
            retornoTela.textContent = JSON.stringify(contadorPalavras) //enfia conteúdo no p
            const corpo = document.querySelector("body") //seleciona um local no DOM
            corpo.appendChild(retornoTela) //insere o p criado no DOM no local selecionado


             //TABELA *********************************

            //cria tabela
            const tabela = document.createElement('table') //cria na memória um table
            tabela.border = "1"
            tabela.style.borderCollapse = "collapse"
            tabela.style.width = "50%"

            //cabeçalho tabela
            const header = document.createElement('tr')
            const colunaChave = document.createElement('th')
            colunaChave.textContent = "Chave"
            const colunaValor = document.createElement('th')
            colunaValor.textContent = "Valor"

            //adicionar colunas
            header.appendChild(colunaChave)
            header.appendChild(colunaValor)

            //adiciona cabeçalho a tabela
            tabela.appendChild(header)

            //itera sobre o objeto e cria uma linha pra cad achave e valor
            for (let chave in contadorPalavras) {
                const linha = document.createElement('tr'); // Cria uma linha
                // Cria a célula da chave
                const celulaChave = document.createElement('td');
                celulaChave.textContent = chave;

                // Cria a célula do valor
                 const celulaValor = document.createElement('td');
                 celulaValor.textContent = contadorPalavras[chave];

                 // Adiciona as células à linha
                 linha.appendChild(celulaChave);
                 linha.appendChild(celulaValor);

                 // Adiciona a linha à tabela
                 tabela.appendChild(linha);
            }
        
            // Insere a tabela no body
            corpo.appendChild(tabela);

            // FIM TABELA *********************************
        })
    //Q4

       let ocorrenciaBtn = document.querySelector("#ocorrenciaBtn") //criar esse botao lá no html
    
       ocorrenciaBtn.addEventListener('click', () => {
        let contadorPalavras = {} //objeto que vai cuspir o resultado
        let input = document.querySelector('#caixa')
        input = input.value.split(" ")

            //popula o objeto
            input.forEach(palavra => {
            
            if(contadorPalavras.hasOwnProperty(palavra)){
                contadorPalavras[palavra]++
            }else{
                contadorPalavras[palavra] = 1
            }
            })

            //iterar de novo pra verificar cada valor e ver qual é maior
            let chave = " "
            let auxMax = 0
            for(objKey in contadorPalavras){
                if(contadorPalavras[objKey] > auxMax) {
                    //identifica o maior valor e atribui a uma variável auxiliar
                    auxMax = contadorPalavras[objKey] //tenho q converter a string pra number?
                    //armazena essa chave
                    chave = objKey
                }
            }
            chave = (`Palavra de maior incidência: ${chave}, que apareceu ${auxMax} vezes`)
        const retornoTela = document.createElement("p") //cria na memória um p
        retornoTela.textContent = chave //enfia conteúdo no p
        const corpo = document.querySelector("body") //seleciona um local no DOM
        corpo.appendChild(retornoTela) //insere o p criado no DOM no local selecionado
        })

        //Q5

        //procurar
        const searchBtn = document.querySelector('#searchBtn')
        let textoPrincipalAlterado
        let hook
        
        searchBtn.addEventListener('click', () => {
        let textoPrincipal = document.querySelector('#caixa').value
        let procurarNoTexto = document.querySelector('#searchBox').value

        textoPrincipal = textoPrincipal.split(" ")
        let textoPrincipalAlteradoF1
        textoPrincipalAlteradoF1 = textoPrincipal.map((palavra) => { //map só recebe um parâmetro: a função callback
        if(palavra == procurarNoTexto) {
        hook = palavra
        return `<span style="background-color: yellow">${palavra}</span>`
        }
        else return palavra
        }).join(" ")
        
        let retornoTela = document.createElement('p') //cria p na memoria
        const corpo = document.querySelector('body') //seleciona um lugar no DOM
        retornoTela.innerHTML = textoPrincipalAlteradoF1 //coloca conteudo no p
        corpo.appendChild(retornoTela)
        })

        //substituir
        const replaceBtn = document.querySelector('#replaceBtn')        

        replaceBtn.addEventListener('click', () => {
        let replace = document.querySelector('#replaceBox').value
        let textoPrincipal = document.querySelector('#caixa').value
        let textoPrincipalAlteradoF2
        console.log(`debug hook dentro do escopo: ${hook}`)
        console.log(`debug replace dentro do escopo: ${replace}`)
        //texto principalalterado está com a tag de highlight, remover antes de aplicar lógica de replace
        textoPrincipalAlteradoF2 = textoPrincipal.split(" ")

        textoPrincipalAlteradoF2 = textoPrincipalAlteradoF2.map((palavra) => {
            if (palavra == hook){ 
                return palavra = replace
            }
            else return palavra
        }).join(" ")

        let retornoTela = document.createElement('p') //cria p na memoria
        const corpo = document.querySelector('body') //seleciona um lugar no DOM
        retornoTela.innerHTML = textoPrincipalAlteradoF2 //coloca a string como valor de p 
        corpo.appendChild(retornoTela) //localdadom.appendChild(elemento DOM a ser adicionado)
        })


        //Q6 6. Faça um programa que leia uma data de nascimento e retorne quantos dias de vida a pessoa tem.

       
        let dataBtn = document.querySelector('#dataBtn')
        const d = new Date()
        let anoAtual = d.getFullYear()
        let mesAtual = d.getMonth() +1
        let dias = 0, mes = 0 , ano = 0, diasDeVida = 0

        dataBtn.addEventListener('click', () => {
            let containerData = document.querySelector('#caixa').value
            let dataArray = containerData.split("/")

            dataArray.forEach((numero, index) => {
                if(index === 0){
                    dias = numero
                    console.log( `debug valor dia: ${dias}`)
                }    
                else if(index === 1) { 
                    mes = (mesAtual - numero) * 30
                    if (mes < 0) mes = mes * -1
                    if (mes === 0) mes = 30
                    console.log( `debug valor mes: ${mes}`)
                }else if(index === 2){
                    ano = (anoAtual - numero) * 365
                    if (ano < 0) ano = ano * -1
                    console.log( `debug valor ano: ${ano}`)

                }
            })
            diasDeVida = Number(dias) + Number(mes) + Number(ano)
            console.log( `Dias de vida: ${diasDeVida}`)

            let efemer = document.createElement('p')
            efemer.innerText = `dias de vida: ${diasDeVida}`
            let corpo = document.querySelector('body')
            corpo.appendChild(efemer)
            })
        
    //Q7  7. Faça um programa que leia uma data de nascimento em formato de dd/mm/aaaa e escreva por extenso a 
//data. Por exemplo: 03/05/2017 vira "03 de maio de 2017".

        let dataExtBtn = document.querySelector('#dataExtBtn')
        
        dataExtBtn.addEventListener('click', () => {
            const months = ["Janeiro", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            let containerData = document.querySelector('#caixa').value
            let dataArray = new Date(containerData)
            let mes = months[dataArray.getMonth()]
           
            //ja funcional, mas precisa manipular a DOM e, se quiser, converter a entrada do usuário para MM/DD/YYYY para que o valor saia na data brasileira
        })
        
    //Q8 Faça um programa que leia duas datas e indique em semanas a distância entre elas. Por exemplo: 
    //02/05/2017 e 02/07/2017 resultado = 8 semanas.
    let difDataBtn = document.querySelector('#difDataBtn')

        difDataBtn.addEventListener('click', () => {
            let containerData = document.querySelector('#caixa').value
            let dataArray = containerData.split("/")
            console.log(`debug dataarray : ${dataArray}`)
            dataArray.forEach((numero, index) => {
                if(index === 0){
                    dias = numero
                    console.log( `debug valor dia: ${dias}`)
                }    
                else if(index === 1) { 
                    mes = (mesAtual - numero) * 30
                    if (mes < 0) mes = mes * -1
                    if (mes === 0) mes = 30
                    console.log( `debug valor mes: ${mes}`)
                }else if(index === 2){
                    ano = (anoAtual - numero) * 365
                    if (ano < 0) ano = ano * -1
                    console.log( `debug valor ano: ${ano}`)

                }
            })
            diasDeVida = Number(dias) + Number(mes) + Number(ano)


        })

        //Q10
        criptoBtn = document.querySelector('#criptoBtn')
        //criar objeto
        const mapeamento = {
            'T': 'P', 'P': 'T',
            'E': 'O', 'O': 'E',
            'N': 'L', 'L': 'N',
            'I': 'A', 'A': 'I',
            'S': 'R', 'R': 'S',
        }
        //percorrer os caracteres da frase e caso ela seja uma chave, trocar pelo valor dessa chave
        criptoBtn.addEventListener('click', () => {
        let fraseCripto = document.querySelector('#caixa').value
            fraseCripto = fraseCripto.split("")

            fraseCripto.forEach((letra, indice) => {
                if(Object.keys(mapeamento).includes(letra)){
                    fraseCripto[indice] = mapeamento[letra]
                }
            })

            fraseCripto = fraseCripto.join("")
            console.log(`debug finalfrasecripto: ${fraseCripto}`)

            let pzinho = document.createElement('p')
            pzinho.innerHTML = fraseCripto
            let corpo = document.querySelector('body')
            corpo.appendChild(pzinho)
        })
    