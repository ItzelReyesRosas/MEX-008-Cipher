
let inputName =  document.getElementById('input-name');
let bienvenido = document.getElementById('welcome');
const botonIngresar = document.getElementById('boton-ingresar');


botonIngresar.addEventListener("click", event =>{
    bienvenido.innerHTML = "Bienvenid@ " + inputName.value ;
    let segundaParte = document.getElementById('segunda-parte');
    let primeraParte = document.getElementById('primera-parte');
    primeraParte.style.display="none";
    segundaParte.style.display="block";

    event.preventDefault();
  });


/*document.getElementById('ingresar').addEventListener('clic');


const inputName = document.getElementById('ingresar');*/
//let offset = document.getElementById('offset');
//const inputName =  document.getElementById('input-name');
//const bienvenido = document.getElementById('welcome');

const botonTexto = document.getElementById('boton-texto');
botonTexto.addEventListener("click", event =>{
  let textoChat = document.getElementById('texto-chat');
  let textoOriginal = document.getElementById('texto-original').value;
  textoChat.value = textoOriginal;
  event.preventDefault();
});

const botonCodifica = document.getElementById('boton-codifica');
  botonCodifica.addEventListener("click", event => {
  let textoOriginal = document.getElementById('texto-original').value;
  let textoCifrado = document.getElementById('texto-cifrado');
  //let offset = document.getElementById('offset').value;
  let offset = document.getElementById('input-offset').value;
  textoCifrado.value = cipher.encode(parseInt(offset), textoOriginal);
  event.preventDefault();
   });



   const botonDescifra = document.getElementById('boton-descifra');
     botonDescifra.addEventListener("click", event => {
     let textoCifrado = document.getElementById('texto-cifrado').value;
     let textoDescifrado = document.getElementById('texto-descifrado');
     //let offset = document.getElementById('offset').value;
     let offset = document.getElementById('input-offset').value;
     textoDescifrado.value = cipher.decode(parseInt(offset), textoCifrado);
     event.preventDefault();
      });



//console.log(inputName);

//const saluda = () => {


    // bienvenido.innerHTML = 'Bienvenido(a)' + ' ' + inputName.value; //bienvenido.innerHTML = inputName.value + '</br>'+ 'Bienvenido';
     //window.location="contactos.html";
    // console.log(offset.value);
    //location.href="contactos.html";




   //inputName.addEventListener('click', saluda);
