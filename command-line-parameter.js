const http =require('http');

const argu=process.argv


const port=argu[2];


http.createServer((req,res)=>{
    res.write("Hello cheking Command line input")
    res.end()
}).listen(port)