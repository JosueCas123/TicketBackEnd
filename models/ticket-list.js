const Ticket = require("./tickets");

class TicketList {
    constructor() {
        this.ultimoTicket = 0;

        this.pendientes = [];
        this.asignados = [];
    }
    get siguenteNumero() {
        this.ultimoTicket++;
        return this.ultimoTicket;
    }
    // 3 que se veran en la tarjeta y 10 en el lado horizontal
    get ultmos13 (){
        return this.asignados.slice(0,13)
    }

    crearTicket(){
        const nuevoTicket = new Ticket(this.siguenteNumero)
        this.pendientes.push(nuevoTicket)
        return nuevoTicket
    }

    asignarTicket(agente, escritorio) { 
       if (this.pendientes.length === 0){
        return null;
       }

       const siguenteTicket = this.pendientes.shift();

       siguenteTicket.agente = agente
       siguenteTicket.escritorio = escritorio

       this.asignados.unshift(siguenteTicket)

       return siguenteTicket
    }
}

module.exports = TicketList;