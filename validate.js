//Seu JavaScript de validação aqui
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let assuntoInput = document.querySelector("#assunto");
let msgTextArea = document.querySelector("#mensagem");

let nomeErro = document.querySelector(".erro_nome");
let emailErro = document.querySelector(".erro_email");
let assuntoErro = document.querySelector(".erro_assunto");
let msgErro = document.querySelector(".erro_mensagem");
let botaoEnviar = document.querySelector(".botao_enviar");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

nomeInput.addEventListener("blur", (e)=>{
  if(nomeInput.value.length ===0){
    nomeErro.innerHTML = "Campo vazio"
    nomeErro.style.visibility ="visible" ;
  } else if(nomeInput.value.length > 30){
    nomeErro.style.visibility ="visible";
  } else{
    nomeErro.style.visibility ="hidden";
  }
})

emailInput.addEventListener("blur", (e) => {
  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    emailErro.style.visibility = "visible";
  } else {
    emailErro.style.visibility = "hidden";
  }
});

assuntoInput.addEventListener("blur", (e) => {
  if (!assuntoInput.value) {
    assuntoErro.style.visibility = "visible";
  } else {
    assuntoErro.style.visibility = "hidden";
  }
});

msgTextArea.addEventListener("blur", (e) => {
  if (!msgTextArea.value) {
    msgErro.style.visibility = "visible";
  } else {
    msgErro.style.visibility = "hidden";
  }
});

document.addEventListener('input', (e) => {
  if (
    nomeInput.validity.valid === true &&
    emailInput.validity.valid === true &&
    assuntoInput.validity.valid &&
    msgTextArea.validity.valid
  ) {
    botaoEnviar.style.cursor ="pointer";
    botaoEnviar.style.background =" #2A7AE4"
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
})