const formulario = document.getElementById('formulario');

const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

// Alerta erro ou valido
function mostrarErro (input, mensagem) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controleFormulario erro';
    const small = controleFormulario.querySelector('small');
    small.innerText = mensagem;
}

function mostrarValido (input) {
    const controleFormulario = input.parentElement;
    controleFormulario.className = 'controleFormulario valido';
}

//Validacao email
function validarEmail (input) {
    if (input.value == '') {
        mostrarErro(input, 'Email é necessario');
        return; //!?
    }

    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reEmail.test(input.value.trim())) {
        mostrarErro(input, 'Email não é valido');
    }
};

//Conferir campos necessarios
function conferirNecessario (arr) {
    arr.forEach(function(input) {
        if (input.value.trim() === '') {
            mostrarErro(input, `${nomeCampo(input)} é necessario`);
        } else {
            mostrarValido(input);
        }
    });
}

//Conferir tamanho de input
function conferirTamanho (input, min, max) {
    if (input.value.length < min) {
        mostrarErro(input, `${nomeCampo(input)} deve ter pelo menos ${min} caracteres.`)
    } else if (input.value.length > max) {
        mostrarErro(input, `${nomeCampo(input)} deve ter até ${max} caracteres.`)
    }
}

//Conferir igualdade de senhas
function conferirSenhas (input, input2) {
    if (input.value !== input2.value) mostrarErro(input2, 'Senha diferente');
}

//Nome do campo formatado
function nomeCampo (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    conferirNecessario([usuario, email, senha, senha2]);
    validarEmail(email);
    conferirTamanho(usuario, 3, 20);
    conferirTamanho(senha, 6, 30);
    conferirSenhas(senha, senha2);
});