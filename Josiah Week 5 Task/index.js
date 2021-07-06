

// const http = require('http')
// const fs = require('fs')

// const hostname = '127.0.0.1'
// const port = 8080

// const server = http.createServer((req, res)=> {
//     res.statusCode = 200
//     res.setHeader = {'Content-Type': 'text/html'}
//     // res.sendfile (index.html);

//     //console.log(req.url)

//     fs.readFile (__dirname + "./index.html", (err, data) => {
//         if (err)return;
//         res.end(data)
//     })
//     fs.readFile ("./about.html", (err, data) => {
//         if (err)return;
//         res.end(data)
//     })
//     fs.readFile ("./cpntact.html", (err, data) => {
//         if (err)return;
//         res.end(data)
//     })
//     fs.readFile ("./contact_us.html", (err, data) => {
//         if (err)return;
//         res.end(data)
//     })
// })

// server.listen(port,hostname, () =>{
//     console.log(`server running at http://${hostname}:${port}/`)
// })

const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 8080

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader = {'Content-Type': 'text/html'}

    fs.readFile ("./index.html", (err, data) => {
                if (err)return;
                 res.end(data)
             });

    fs.readFile("/", (err,data) => {
        if (err)return;
        res.sendFile("./index.html");
        
   });
    fs.readFile ("./about", (err, data) => {
         if (err)return;
         res.(data)
    });
//     fs.readFile ("./about.html", (err, data) => {
//                 if (err)return;
//                 res.end(data)
//             });
        
//     fs.readFile ("./about_us.html", (err, data) => {
//                 if (err)return;
//                 res.end(data)
//             });

});
//     fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//         res.setHeader("Content-Type", "text/html");
//         res.writeHead(200);
//         res.end(contents);
//     })
//     .catch(err => {
//         res.writeHead(500);
//         res.end(err);
//         return;
//     });
// });

server.listen(port,hostname, () =>{
console.log(`server running at http://${hostname}:${port}/`)
 })