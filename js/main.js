import { criarLoader } from "./loader.js";
import { construindoEfeitoMenuPrincipal } from "./mainMenu.js";
import { retornandoAoTopo } from "./scrollTop.js";
import { formularioDeContato } from "./contactForm.js";
import { responsiveMenu } from "./responsiveMenu.js";

// Criando o loader da página

criarLoader();

// Selecionando o loader pelo id e fazendo o conteúdo principal aparecer

const loader = document.querySelector('#loader');
const main = document.querySelector('#wrap');

window.addEventListener('load', () => setTimeout(desaparecerLoader, 3500));

function desaparecerLoader () {
    loader.style.display = 'none';
    main.style.display = 'block';
}

// Efeitos no menu principal e em alguns links

construindoEfeitoMenuPrincipal();

// Botão para retornar ao topo da página

retornandoAoTopo();

// Alguns efeitos no formulário de contato

formularioDeContato();

// Lidando com a responsividade do menu principal

responsiveMenu();
