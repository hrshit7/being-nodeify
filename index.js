const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("logged.txt", log, (err,data)=>{
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("About Us");
                break;
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000, ()=>console.log("Server Started"));