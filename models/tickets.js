const {v4:uuid} = require('uuid');

class Ticket {
    constructor(numero) {
        //definir propiedades
        this.id = uuid();
        this.numero = numero;
        this.escritorio = null;
        this.agente = null;

    }
}

module.exports = Ticket;