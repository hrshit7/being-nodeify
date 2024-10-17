const http = require("http");    //http modeule
const fs = require("fs");        // file system module
const url = require("url");      // url library for specify url information

const myServer = http.createServer((req, res)=>{                       // create server is used to create a server
    if(req.url == '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;         // in this log we are creating a log file a store information of app pages
    const myUrl = url.parse(req.url , true);                            //use of url library just to parse a url passes two parameter one is url, second is the query parse parameter and also there are many parameter we can use
    console.log(myUrl);
    
    fs.appendFile("logged.txt", log, (err,data)=>{                      //created and append a file on every page reload
        switch (myUrl.pathname) {
            case "/":
                if(req.url === 'GET') return res.end("HomePage");      //get request is to get data from server
                break;
            case "/about":
                const lastName = myUrl.query.ln;
                res.end("last name is " + lastName);
                break;
            case "/search":
                const searchQuery = myUrl.query.search;
                res.end("Search Results of your Query " + searchQuery);
                break;    
            case "/signup":
                if(req.url === 'GET') return res.end("This is a signup form");         //here we take data from user 
                else if(req.url === 'POST'){                                           // and from here we simply collect the data to server and store in a db and returns success to user
                    // db.store
                    return res.end("Success");
                }
                break;     
            default:
                res.end("404");
        }
    });
});

myServer.listen(8000, ()=>console.log("Server Started"));