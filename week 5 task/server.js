 const http = require('http')
 const fs = require('fs')

 const hostname = '127.0.0.1'
 const port = 8080

 const server = http.createServer((req, res)=> {
     res.statusCode = 200
     res.setHeader = {'Content-Type': 'text/html'}
 
 var url = require('url');

 var route = url.parse(req.url).pathname;


  switch (route) {
    
    case "/":
        fs.readFile ("./index.html", (err, data) => {
         if (err)return;
         res.end(data)
     });   
       // response.write( 'This is the home page.' );
        break;
    case "/home":
        fs.readFile ("./index.html", (err, data) => {
         if (err)return;
         res.end(data)
     });
     break;
        
    case "/contact":
        fs.readFile ("./contact.html", (err, data) => {
         if (err)return;
         res.end(data)
     });
     break;
        
    case "/about":
        fs.readFile ("./about.html", (err, data) => {
         if (err)return;
         res.end(data)
     });
     break;
     
     case "/about_us":
        fs.readFile ("./about.html", (err, data) => {
         if (err)return;
         res.end(data)
     });
     break;
     
     
     default:  
         fs.readFile ("./error.html", (err, data) => {
         if (err)return;
         res.end(data)
     });
        
}

 })

 server.listen(port,hostname, () =>{
     console.log(`server running at http://${hostname}:${port}/`)
 })
