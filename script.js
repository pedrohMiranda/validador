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

//Event Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (usuario.value === '') {
        mostrarErro(usuario, 'Usuario necessario');
    }
    else {
        mostrarValido(usuario);
    }

    if (email.value === '') {
        mostrarErro(email, 'Email necessario');
    } 
    else if (!validarEmail(email.value)) {
        mostrarErro(email, 'Email invalido');
    }
    else {
        mostrarValido(email);
    }

    if (senha.value === '') {
        mostrarErro(senha, 'Senha necessaria');
    }
    else {
        mostrarValido(senha);
    }

    if (senha2.value === '') {
        mostrarErro(senha2, 'Confirmacao necessaria');
    }
    else {
        mostrarValido(senha2);
    }
});