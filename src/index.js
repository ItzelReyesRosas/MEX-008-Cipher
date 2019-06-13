/*document.getElementById('ingresar').addEventListener('clic');


const inputName = document.getElementById('ingresar');*/
let offset = document.getElementById('input-offset');
const botonCodifica = document.getElementById('boton-codifica');
const botonIngreso = document.getElementById('boton-ingreso');
const inputName =  document.getElementById('input-name');
const bienvenido = document.getElementById('welcome');


const ingreso = ()=>{
     window.location="contactos.html";
     //location.href="contactos.html";
     bienvenido.innerHTML = 'Bienvenido(a)' + inputName.value; //bienvenido.innerHTML = inputName.value + '</br>'+ 'Bienvenido';
    // console.log(offset.value);
}

const codifica = () => {
         window.location="chatsDos.html";

}

botonIngreso.addEventListener("click", ingreso);
//botonCodifica.addEventListener("click", codifica);
