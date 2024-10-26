const http = require("http");

const server = http.createServer(function (req, res){
    res.end("Hello Nodejs Server");
});

server.listen(7777);