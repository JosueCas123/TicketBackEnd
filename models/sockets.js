const TicketList = require("./ticket-list");


class Sockets {
    constructor(io){
        this.io = io;
        //crear instance  ticketList
        this.ticketList = new TicketList();

        this.sockestEvents();
    }

    sockestEvents (){
        //On connecion
       this.io.on('connection',(socket)=>{

        // en funcion recivimos la data o el payload y tambuen podemos recibir un callback 
          socket.on('solicitar-ticket',(data, callback) =>{
            const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket)
          } )

          socket.on('siguente-ticket-trabajo', ({agente, escritorio}, callback) =>{
            callback(this.ticketList.asignarTicket(agente, escritorio))

            this.io.emit('ticket-asignados', this.ticketList.ultmos13)
          })
        })
    }
}
 module.exports = Sockets;