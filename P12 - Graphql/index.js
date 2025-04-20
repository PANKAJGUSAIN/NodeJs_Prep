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

            type User{
                id:ID!,
                name:String!
                username:String!,
                email:String!,
                phone:String!
            }


            type Todo{
                id : ID!,
                title : String!,
                completed : Boolean,
                userId: ID!,
            }
            
            type Query{
                getTodos : [Todo],  
                getAllUser : [User],
                getUserByid(id:ID!): User
            }
        `,
        resolvers:{
            Query : {
                getTodos:async()=>{
                    const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    console.log(result.data);
                    return result.data;
                },
                getAllUser:async()=>{
                    const result2 = await axios.get('https://jsonplaceholder.typicode.com/users');
                    return result2.data;
                },
                getUserByid:async(parent , {id})=>{
                    const result2 = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                    return result2.data;
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