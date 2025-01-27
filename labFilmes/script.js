/* Crie uma pasta no seu repositório do Github Pages intitulada “catalogo_filmes”. Em 
seguida, crie a estrutura básica dentro dela: arquivo index.html, pasta css, js, crie 
uma folha de estilo para deixar a página com uma boa apresentação e um script js 
para a atividade.
2. Defina uma estrutura html para a ficha de apresentação do filme/série. Crie um
estilo de apresentação para cada filme.
3. Crie uma função para preencher a ficha de apresentação. Verifique com dados de 
teste.
4. Crie uma função que carregue os dados obtidos a partir da URL: 
https://rafaelescalfoni.github.io/desenv_web/filmes.json
5. Teste sua função - dê um console.log nos dados retornados da resposta à requisição.
6. Faça uma iteração nos dados para recuperar o objeto contendo os dados do 
filme/série: título, resumo, figura, classificação etária, gêneros, titulosSemelhantes, 
elenco e opiniões.
7. Preencha a ficha de apresentação com os dados recuperados. Não esqueça que 
alguns dos atributos de filme/série são arrays, que precisarão também ser iterados.
8. Desafio: altere a cor da faixa etária de acordo com os valores: verde: de 0 a 14 anos; 
amarelo acima de 14 e menor que 18; vermelho: maior que 18 anos;
9. Desafio 2: represente a classificação (rating) de cada filme/série com estrela */

import dadosFilmes from './filmes.json'

console.log(dadosFilmes)

// Função para preencher a ficha de apresentação
// function preencherFicha(filme) {
//   const ficha = document.querySelector('.ficha');
//   ficha.querySelector('.titulo').textContent = filme.titulo;
//   ficha.querySelector('.resumo').textContent = filme.resumo;
//   ficha.querySelector('.figura').src = filme.figura;
//   ficha.querySelector('.faixa-etaria').textContent = filme.faixaEtaria;
//   ficha.querySelector('.generos').textContent = filme.generos.join(', ');
//   ficha.querySelector('.elenco').textContent = filme.elenco.join(', ');
//   ficha.querySelector('.opinioes').textContent = filme.opinioes.join(', ');