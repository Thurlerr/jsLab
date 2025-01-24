// Alguns dados para você trabalhar
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];



const people = [`Bernhard, Sandra`, `Bethea, Erin`, `Becker, Carl`, `Bentsen, Lloyd`,
    `Beckett, Samuel`, `Blake, William`, `Berger, Ric`, `Beddoes, Mick`, `Beethoven, 
   Ludwig`, `Belloc, Hilaire`, `Begin, Menachem`, `Bellow, Saul`, `Benchley, Robert`,
    `Blair, Robert`, `Benenson, Peter`, `Benjamin, Walter`, `Berlin, Irving`, `Benn, Tony`,
    `Benson, Leana`, `Bent, Silas`, `Berle, Milton`, `Berry, Halle`, `Biko, Steve`, `Beck, 
   Glenn`, `Bergman, Ingmar`, `Black, Elk`, `Berio, Luciano`, `Berne, Eric`, `Berra, 
   Yogi`, `Berry, Wendell`, `Bevan, Aneurin`, `Ben-Gurion, David`, `Bevel, Ken`, `Biden, 
   Joseph`, `Bennington, Chester`, `Bierce, Ambrose`, `Billings, Josh`, `Birrell, 
   Augustine`, `Blair, Tony`, `Beecher, Henry`, `Biondo, Frank`];

//Q1
let x = inventors.filter((obj) => obj.year > 1500) //filter funciona como map, ele devolve um array, recebe como parametro uma callbackFn e fornece elemento, index e fullarray

//Q2
let inventorsNames = inventors.map((obj) => { return { ["first"]: obj.first, ["last"]: obj.last } }
)

//Q3
let sortedByYear = inventors.sort((a, b) => a.year - b.year) //sort itera sobre dois valores dentro do array de uma vez, retornando negativo ele troca (a vem antes) positivo (b antes)

//Q4
//encontrar o ano de nascimento mais recente e o ano de falecimento mais antigo
//e armazenar em duas variáveis
//calcular a diferença entre o ano de falecimento mais antigo e o ano de nascimento mais recente
//retornar o valor dessa diferença

let recBorn = inventors
recBorn.sort((a, b) => a.year - b.year) //passar a chave para os argumentos da callbackFn do sort, sempre, para q n itere sobre o array inteiro
//console.log(recBorn)


let olderDeath = inventors
olderDeath.sort((a, b) => a.passed - b.passed)
let result = (olderDeath[olderDeath.length - 1].passed) - (recBorn[recBorn.length - 1].year) //acessar o indice.key
//console.log(`Todos os inventores ficaram juntos por ${result} anos.`); 

//Q5

inventors.sort((a,b) => (a.year - a.passed) - (b.year - b.passed)) //primeiro, ordena
let inventorsV2 = inventors.forEach((obj) => obj.yearsAlive = obj.passed - obj.year) //itera sobre cada objeto e adiciona uma chave nova com valor de anos vivos (pra visualizar se tá correto)

//Q6
//usar sort pra comparar por ordem alfabética
//com o array organizado, usar sort para verificar se são iguais, se sim, cortar com pop ou shift

let data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
'walk', 'car', 'van', 'car', 'truck']

dataUnique = new Set (data) //set é uma estrutura de dados, como uma classe em js, por isso precisa ser instanciado com um construtor, porque tem métodos dentro dele
console.log(dataUnique)

/*1. Faça uma função que filtre a lista de inventores para aqueles que nasceram de 1500 a 1599.
2. Faça uma função que retorne um array com os primeiros e últimos nomes dos inventores.
3. Faça uma função que ordene o array de inventores pela data de nascimento, do mais antigo para o mais 
novo.
4. Faça uma função que identifique por quantos anos todos os inventores estiveram vivos juntos.
5. Faça uma função que ordene os inventores pelos anos vividos.
6. Crie uma função que remova as redundâncias na lista abaixo:
const data = [`car`, `car`, `truck`, `truck`, `bike`, `walk`, `car`, `van`, `bike`, 
`walk`, `car`, `van`, `car`, `truck`] */