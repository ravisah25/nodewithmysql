const EventEmitter = require('events')

class Looger extends EventEmitter {

    log(res){
         this.emit("emitMessage", {name:'ravi', job:'Node Js Developer'},res);
    }
}

module.exports = Looger;