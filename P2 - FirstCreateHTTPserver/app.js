const http = require("node:http");

const server = http.createServer(function (req, res) {

    if (req.url === "/getSecretCode") { res.end("There's no Secret Code"); }
    else { res.end("Hello World"); }
}); // this gives back an instance of a server 

server.listen(8000, () => {
    console.log('server is listening');
})