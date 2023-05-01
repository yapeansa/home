export function retornandoAoTopo () {
    // Criando o botão de retornar ao topo

    const retornarAoTopo = document.createElement('div');
    retornarAoTopo.className = 'scrolltop';
    retornarAoTopo.id = 'go_top';
    retornarAoTopo.innerHTML = '<a href="#" class="btn_top">&#8593;</a>';

    // Adicionando ao body o botão de retornar ao topo

    document.body.appendChild(retornarAoTopo);

    // Pegando o botão de retornar ao topo pelo id e aplicando os efeitos de scroll

    const botao = document.querySelector('#go_top');
    const altura = screen.availHeight - 80;

    document.addEventListener('scroll', rolagem);

    function rolagem () {
        if (document.documentElement.scrollTop > altura) {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(aparecerBotao, 300);
        } else {
            clearInterval(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(efeito, 300);
        }
    }

    function aparecerBotao () { botao.style.display = 'block' }

    function removerClasse () { botao.classList.remove('fade_out') }

    function desaparecerBotao () { botao.style.display = 'none' }

    function efeito () {
        botao.classList.add('fade_out');
        setTimeout(removerClasse, 300);
        setTimeout(desaparecerBotao, 300);
    }
}
