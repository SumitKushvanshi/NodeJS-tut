const http =require('http');
const age =20;
http.createServer((req,res)=>{
  res.setHeader("Contant-Type","text/html");
  res.write(`
    <html>
    <head>
    <title>Sumit Kushwaha</title>
    </head>
    <body>
    <h1>Hello Sumit kushwaha</h1>
    <h2>`+ age+`</h2>
     <h2>`+new Date()+`</h2>
    </body>
    </html>
    `)
    res.end()
}).listen(8000);