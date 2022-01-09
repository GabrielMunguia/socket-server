//Constante HTML
const lblOnline=document.querySelector('#lblOnline');
const lblOffLine=document.querySelector('#lblOffLine');

const inputMensaje=document.querySelector("#inputMensaje");
const btnEnviar=document.querySelector("#btnEnviar");
const parrafo= document.querySelector('texto');

const socket = io();
socket.on('connect',()=>{
    lblOnline.style.display="";
    lblOffLine.style.display="none"

})

socket.on('disconnect',()=>{
    lblOnline.style.display="none"; 
    lblOffLine.style.display=""
})

socket.on('enviar-mensaje',(payload)=>{
    console.log(payload)
})

btnEnviar.addEventListener('click',()=>{
    const payload ={
        msj:inputMensaje.value,
        date:new Date(),
    }

    socket.emit('enviar-mensaje',payload,(res)=>{
        console.log(res)
    });
    inputMensaje.value=""
});

