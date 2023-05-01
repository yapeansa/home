export function responsiveMenu () {
    // abrir

    const openButton = document.createElement('div');
    openButton.className = 'open__button';
    openButton.id = 'open';

    for (var i = 0; i < 3; i++) {
        openButton.innerHTML += '<div class="open__line"></div>';
    }

    const leftPane = document.querySelector('.left');

    leftPane.appendChild(openButton);

    const open = document.getElementById('open');
    const menu = document.querySelector('.right');

    open.addEventListener('click', abrir);

    function abrir () {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }

    // fechar

    const closeButton = document.createElement('div');
    closeButton.className = 'close__button';
    closeButton.id = 'close';

    for (var i = 0; i < 2; i++) {
        closeButton.innerHTML += '<div class="close__line"></div>';
    }

    const rightPane = document.querySelector('.right');

    rightPane.prepend(closeButton);

    const close = document.getElementById('close');

    close.addEventListener('click', fechar);

    function fechar () {
        menu.classList.add('hide');
        setTimeout(escondendo, 300);
    }

    function escondendo () {
        menu.classList.remove('show');
    }
}
