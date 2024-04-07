/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html.
    Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele.

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe "ativo" nos projetos escondidos.

objetivo 2 - esconder o botão de mostrar mais.
    Passo 1 - pegar o botão e esconder ele
 */

const btnMostrar = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

btnMostrar.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    btnMostrar.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
