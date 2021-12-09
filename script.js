const formulario = document.getElementById('formulario');

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

// Alerta erro ou valido
function mostrarErro(input, mensagem) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controleFormulario erro';
    const small = controleFormulario.querySelector('small');
    small.innerText = mensagem;
}

function mostrarValido(input) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controleFormulario valido';
}

//Validacao email
const validarEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//Conferir campos necessarios
function conferirNecessario(arr) {
    arr.forEach(function(item) {
        if (item.value.trim() === '') {
            mostrarErro(item, `${nomeCampo(item)} e necessario`);
        } else {
            mostrarValido(item);
        }
    });
}

//Nome do campo formatado
function nomeCampo(item) {
    return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

//Event Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    conferirNecessario([usuario, email, senha, senha2]);
});