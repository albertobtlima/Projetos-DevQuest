/* 
Quando clicar na seta para avançar temos que esconder todas as imagens e mostra a proxíma imagem.
    a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar adiciona-se mais 1 ao contator de imagens para poder saber que a segunda imagem será mostrada.

Esconder todas as imagens.
    pegar todas as imagens usando o DOM e remover a classe mostrar.

Mostrar a próxima imagem.
    pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela.
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {
    // testa se o contador da imagemAtual é igual ao total de imagens.
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual === totalDeImagens) {
        return;
    }
    imagemAtual++;
    esconderImagem();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function() {
    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--;
    esconderImagem();
    mostrarImagem();
})