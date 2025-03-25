//  create the MongoClient instance  - new MongoClient(DB_CONNECT);
//  create the connection            - client.connect();
//  select the connection to work with - db.collection('test_Sample');

const dotenv = require('dotenv')
dotenv.config();
const {MongoClient} = require('mongodb');



const dbstring = process.env.DB_CONNECT;

const client = new MongoClient(dbstring); // create the client instance

async function main() {
    await client.connect();
    console.log("client connected successfully");
    const db = client.db('Zylo_Drive');
    const collection = db.collection('test_Sample');
    const findResult = await collection.find({}).toArray(); // returns all the data 
    console.log(findResult);
    const insertResult = await collection.insertMany([{ name:"angelina"},{name:"john"}]) // returns the object id
    console.log(insertResult);
}

main();


