export function formularioDeContato () {
    const campos = document.querySelectorAll('[required]');

    campos.forEach(campo => {
        campo.addEventListener('focus', vanish);
        campo.addEventListener('blur', appear);
    });

    function vanish () { this.placeholder = ''; }

    function appear () {
        if (this.name == 'nome' || this.name == 'e-mail') {
            this.placeholder = `Digite seu ${this.name} aqui...`;
        } else {
            this.placeholder = `Digite sua ${this.name} aqui...`;
        }
    }
}
