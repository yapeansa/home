export function construindoEfeitoMenuPrincipal () {
    const menuItems = document.querySelectorAll('.menu__principal_link');

    menuItems.forEach(elemento => elemento.innerHTML += '<span class="efeito"></span>');

    const linkIntro = document.querySelector('.tree');
    const linkTCC = document.querySelectorAll('.tcc__link');
    const arvLink = document.querySelector('.arv__link');

    const conjuntoDeLinks = [linkIntro, ...linkTCC, arvLink];

    conjuntoDeLinks.forEach(link => link.innerHTML += '<span class="efeito__linha"></span>');
}
