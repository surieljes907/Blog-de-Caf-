// const btnEnviar=document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click',function(e){
//     console.log(e);
//     e.preventDefault();
//     console.log("Enviando formulario");
// })
const datos= {
    nombre: '',
    email:'',
    mensaje:''
}
//eventos de inputs y text area
const nombreinput=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
const formulario=document.querySelector('.formulario');


nombreinput.addEventListener('input',leertexto);
email.addEventListener('input',leertexto);
mensaje.addEventListener('input',leertexto);
//Evento de Submit: Solo son para formularios en general y click para cualquier elemento
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    //validar el formulario
    const { nombre, email,mensaje}=datos;
    if(nombre==="" || email===""||mensaje===""){
        mostraralerta('Todos los campos son  obligatorios',true);
        return;
    }
    mostraralerta('Mensaje enviado correctamente');
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);
    //enviar formulario
    console.log("enviando formulario")
})


function leertexto(e){
    // console.log(e.target.value);
    datos[e.target.id]= e.target.value;
    // console.log(datos);
}

function mostraralerta(mensaje,error=null){
    const alerta=document.createElement('P');
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },5000);
}

function mostrarError(mensaje){
    const error=document.createElement('P');
    error.textContent=mensaje;
    error.classList.add('error');
    formulario.appendChild(error);
    //desaparecer después de 5 segundos
    setTimeout(()=>{
        error.remove();
    },5000);
}

function mostrarmensaje(mensaje){
    const alert=document.createElement('P');
    alert.textContent=mensaje;
    alert.classList.add('correcto');
    formulario.appendChild(alert);
    //desaparecer después de 5 segundos
    setTimeout(()=>{
        alert.remove();
    },5000);
}
