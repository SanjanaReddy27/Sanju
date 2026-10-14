const os=require('os');
const http=require('http');
console.log("Os:",os.platform());
console.log("Freemem:",os.freemem());
http.createServer((req,res)=>
{
    res.end("Hello World!");
}).listen(3000);
console.log("Server running on port 3000");