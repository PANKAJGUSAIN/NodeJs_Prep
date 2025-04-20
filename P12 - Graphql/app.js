
const { ApolloServer, gql } = require('apollo-server-express');


// 1️⃣ Type Definitions (Schema)
const typeDefs = gql`
    type Query{
        hello : String
    }
`;

// 2️⃣ Resolvers (How to fetch data)
const resolvers = {
    Query : {
        hello : () => 'Hello from Graphql',
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
})

module.exports = {
    typeDefs,
    resolvers,
    server
}
