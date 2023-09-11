// servidoer de express
const express = require('express');
// servidor de socket
const http    = require('http');
const cors = require('cors');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //https server
        this.server = http.createServer(this.app);
        //configuracion del socket
        this.io = socketio(this.server,{/* configuraciones */})

        this.socket = new Sockets(this.io)
        
    }

    middleware() {
        //despejar el directorio publico
       this.app.use(express.static(path.resolve(__dirname, '../public')));
       this.app.use(cors());

        this.app.get('/ultimos',(req, res)=> {
            res.json({
                ok: true,
                ultimos:this.socket.ticketList.ultmos13
            })
        })

    }
    // configurarSockets() {
    //     this.middleware()
    //     new Sockets(this.io)
    // }

    execute() {
        // mamamos al middleware
        this.middleware();

        // // inicializar Sockets
        // this.configurarSockets();
        this.server.listen(this.port, () =>{
            console.log('Servidor corriendo en el puerto' + this.port);
        })
    }
}

module.exports = Server;