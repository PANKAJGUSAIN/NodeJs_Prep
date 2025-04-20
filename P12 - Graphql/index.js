const express = require('express');
const { server } = require('./app');
const app = express();

async function startServer() {

    await server.start();

    server.applyMiddleware({ app }); // 👈 Hook Apollo into Express

    app.listen(4848, () => {
        console.log(`🚀 Server running at http://localhost:4848${server.graphqlPath}`);
    })

}
startServer();