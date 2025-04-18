const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0 ;
    }

    order(size , toppings){
        this.orderNumber++;
        this.emit("order" , size , toppings);
    }
}

module.exports = PizzaShop