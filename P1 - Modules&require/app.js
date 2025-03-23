// ES module way 
// import { calculateSum } from './sum';


// common js way
const obj = require('./sum');
const data = require('./test.json');

obj.calculateSum(10 , 20 );
console.log(data);