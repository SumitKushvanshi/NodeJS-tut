const http=require('http');

http.createServer((req,res)=>{

    if(req.url=='/login'){
        res.write("<h1>login Page</h1>");
    }else if(req.url =='/'){
        res.write("<h1>Home page</h1>")
    }else{
        res.write('<h1>Other Pages<h1/>')
    }
    res.end();

}).listen(5600);