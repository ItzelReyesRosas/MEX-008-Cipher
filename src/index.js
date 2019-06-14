/*document.getElementById('ingresar').addEventListener('clic');


const inputName = document.getElementById('ingresar');*/
let offset = document.getElementById('input-offset');
const inputName =  document.getElementById('input-name');
const bienvenido = document.getElementById('welcome');


console.log(inputName);

const saluda = () => {


     bienvenido.innerHTML = 'Bienvenido(a)' + ' ' + inputName.value; //bienvenido.innerHTML = inputName.value + '</br>'+ 'Bienvenido';
     //window.location="contactos.html";
    // console.log(offset.value);
    //location.href="contactos.html";
}

const codifica = () => {
         window.location="chats2.html";

}


   inputName.addEventListener('click', saluda);
