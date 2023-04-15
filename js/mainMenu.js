const menuItems = document.querySelectorAll('.menu__principal_link');

menuItems.forEach(elemento => elemento.innerHTML += '<span class="efeito"></span>');

const linkIntro = document.querySelector('.tree');

linkIntro.innerHTML += '<span class="efeito__linha"></span>';

const linkTCC = document.querySelector('.tcc__link');

linkTCC.innerHTML += '<span class="efeito__linha"></span>';