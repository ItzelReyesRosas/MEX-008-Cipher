
let inputName =  document.getElementById('input-name');
let mensajes = document.getElementById('mensajes-usuario');
const botonIngresar = document.getElementById('boton-ingresar');
const botonTexto = document.getElementById('boton-texto');
const botonCodifica = document.getElementById('boton-codifica');
const botonDescifra = document.getElementById('boton-descifra');


botonIngresar.addEventListener("click", event =>{
    mensajes.innerHTML = "&nbsp&nbsp&nbspMensajes de "  + inputName.value  ;
    let segundaParte = document.getElementById('segunda-parte');
    let primeraParte = document.getElementById('primera-parte');
    primeraParte.style.display="none";
    segundaParte.style.display="block";
    event.preventDefault();
  });




botonTexto.addEventListener("click", event =>{
  let textoChat = document.getElementById('texto-chat');
  let textoOriginal = document.getElementById('texto-original').value;
  textoChat.value = textoOriginal;
  event.preventDefault();
});


  botonCodifica.addEventListener("click", event => {
  let textoOriginal = document.getElementById('texto-original').value;
  let textoCifrado = document.getElementById('texto-cifrado');
  let offset = document.getElementById('input-offset').value;
  textoCifrado.value = cipher.encode(parseInt(offset), textoOriginal);
  event.preventDefault();
   });




     botonDescifra.addEventListener("click", event => {
     let textoCifrado = document.getElementById('texto-cifrado').value;
     let textoDescifrado = document.getElementById('texto-descifrado');
     let offset = document.getElementById('input-offset').value;
     textoDescifrado.value = cipher.decode(parseInt(offset), textoCifrado);
     event.preventDefault();
      });
