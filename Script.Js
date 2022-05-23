let botaoEnviar = document.getElementById('botaoEnviar')
let formulario = document.getElementsByClassName("formulario");

botaoEnviar.addEventListener('click', (event) => {
  let formularioValido = true;

  let campoNome = document.getElementById("nome");
  let mensagemNome = document.getElementById("mensagemNome");

  let campoEmail = document.getElementById("email");
  let mensagemEmail = document.getElementById("mensagemEmail");

  let campoMensagem = document.getElementById("mensagem");
  let mensagemMensagem = document.getElementById("mensagemMensagem");

  if (campoNome.value.length === 0) {
    mensagemNome.innerHTML = "Digite seu nome";
    formularioValido = false;
    campoNome.classList.add("errorInput");
  } else {
    mensagemNome.innerHTML = "";
    campoNome.classList.remove("errorInput")
  }

  if (campoEmail.value === "") {
    mensagemEmail.innerHTML = "Digite seu email";
    formularioValido = false;
    campoEmail.classList.add("errorInput");
  } else {
    mensagemEmail.innerHTML = "";
    campoEmail.classList.remove("errorInput")
  }

  if (campoMensagem.value.length === 0) {
    mensagemMensagem.innerHTML = "Digite sua Mensagem";
    formularioValido = false;
    campoMensagem.classList.add("errorInput");
  } else {
    mensagemMensagem.innerHTML = "";
    campoMensagem.classList.remove("errorInput")
  }

  if (!formularioValido){
    event.preventDefault();
  }

  });