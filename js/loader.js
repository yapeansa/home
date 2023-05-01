export function criarLoader () {
    // Criando o container loader

    const loaderContainer = document.createElement('div');
    loaderContainer.id = 'loader';
    const rotacional = document.createElement('div');
    rotacional.className = 'animation__loader';
    loaderContainer.append(rotacional);

    // Inserindo loader container no body

    document.body.prepend(loaderContainer);

}
