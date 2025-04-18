const PizzaShop = require('./Pizza-shop');
const DrinkMachine = require('./DrinkMachine');

const pizzaa = new PizzaShop();
const dirnkmachine = new DrinkMachine();

// create an listenier
pizzaa.on("order" , (size , toppings)=>{
    console.log("Order Recieved");
    dirnkmachine.serverDrink(size);
})

pizzaa.order("large" , "mushroom");