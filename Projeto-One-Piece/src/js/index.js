/* 
   OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado.

        PASSO 1 - pegar os botões no JS para poder verificar quando o usuário clicar em cima de um deles.

        PASSO 2 - adicionar a classe "selecionado" no botão que o usuário clicou.

        PASSO 3 - verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.
    
    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações dp personagem

        PASSO 1 - pegar os personagens no JS para poder mostrar ou esconder ele.

        PASSO 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou.

        PASSO 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção delel.
*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", ()=> {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}