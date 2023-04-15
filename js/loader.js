// Criando o container loader

const loaderContainer = document.createElement('div');
loaderContainer.id = 'loader';
const rotacional = document.createElement('div');
rotacional.className = 'animation__loader';
loaderContainer.append(rotacional);

// Inserindo loader container no body

document.body.prepend(loaderContainer);

// Selecionando o loader pelo id e fazendo o conteúdo principal aparecer

const loader = document.querySelector('#loader');
const main = document.querySelector('#wrap');

window.addEventListener('load', () => setTimeout(desaparecerLoader, 3500));

function desaparecerLoader () {
    loader.style.display = 'none';
    main.style.display = 'block';
}
