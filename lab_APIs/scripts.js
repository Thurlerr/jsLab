let btn = document.querySelector("#convBtn")

btn.addEventListener('click', () => {
    let moedaConvertida = document.querySelector ('#currency').value
    
    let apiDinheirinho = new XMLHttpRequest()
    console.log(`debug moedaconvertida: ${moedaConvertida}`)
    apiDinheirinho.open("GET",`https://v6.exchangerate-api.com/v6/4cb65b6938420d8cbb814c6e/pair/${moedaConvertida}/BRL`)
    apiDinheirinho.send()
    console.log(`debug apidinheirinho com o value: ${apiDinheirinho}`)
    apiDinheirinho.onreadystatechange = function () {
        console.log(`apiDinheirinho: ${this.readyState}`)
        if (this.readyState == 4 && this.status == 200) {
            let dados = JSON.parse(this.responseText)

            console.log(dados)
        }
    }
    
})