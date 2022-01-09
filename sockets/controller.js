
const socketController=(socket) => {
    console.log('Cliente conectado', socket.id );

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje',(payload,callback)=>{
        socket.broadcast.emit('enviar-mensaje',payload)
      callback({msj:'todo salio bien',id:'123456'})
    })


  } 

  moodule.export =socketController