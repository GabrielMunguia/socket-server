const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
 
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server);
   
    this.paths={
   
    }
   



     //MIDDLEWARES
     this.middleware();
    //RUTAS
    this.routes();

    //socket

    this.socket();
  }

  routes() {

   
    
  }

  middleware() {
      //Directorio publico
      this.app.use(express.static('public'))
      //CORS
      this.app.use(cors())
      //Lectura y parseo del body en JSON
      this.app.use(express.json())


  }

  async connectarDB(){
    await dbConnection()
  }

  listen() {
    this.server.listen(process.env.PORT, () => {
      console.log("localhost:", process.env.PORT);
    });
  }
  socket(){
    
    this.io.on("connection", socketController)
  }
}

module.exports = Server;
