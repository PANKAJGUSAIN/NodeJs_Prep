const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express();

async function startServer() {

    const server = new ApolloServer({
        typeDefs:`
            type Todo{
                id : ID!,
                title : String!,
                completed : Boolean
            }
            
            type Query{
                getTodos : [Todo],  
            }
        `,
        resolvers:{
            Query : {
                getTodos:async()=>{
                    const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    console.log(result.data);
                    return result.data;
                }
            }
        },
    }) // create apollo server 

    await server.start(); // Start Apollo server
 
    app.use('/graphql',
        cors(),
        express.json(),
        expressMiddleware(server ,{
            context: async ({ req }) => ({})
        }));

    app.listen(4848, () => {
        console.log(`🚀 Server running at http://localhost:4848`);
    })

}
startServer();