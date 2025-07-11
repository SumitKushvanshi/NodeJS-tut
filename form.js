const http=require('http');
const fs=require('fs');
const querysrting=require('querystring')



http.createServer((req,res)=>{

    // if(req.url=='/'){
    //      res.writeHead(200,{'content-type':'text/html'})
    // res.write(`
    //     <html>
    //     <head>
    //     <title>Node</title>
    //     </head>
    //     <body>
    //     <form action='/submit' method='post'>
    //     <input type="text" name='name'><br>
    //     <input type='email' name='email'><br>
    //    <button>Submit</button>
    //     </form>
    //     </body>
    //     </html>
        
    //     `)
    // }
    // if(req.url=='/submit'){
    //     res.write(`<h1>Submitted</h1>`)
    // }

    if(req.url=='/'){

         fs.readFile('html/form.html',"utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"contaent-type":"text/plain"})
            res.write(`internal Error ${err}`)
            res.end()
            return
        }
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end()
    })

    }else if(req.url=='/submit'){
       
        let dataBody=[];
        req.on('data',(chunk)=>{
            dataBody.push(chunk);
        })
        req.on('end',()=>{
            let rawdata=Buffer.concat(dataBody).toString()
            let readable=querysrting.parse(rawdata)
             console.log(readable.name);
             res.writeHead(200,{"contaent-type":"text/html"});
            res.end(`
            <h1>Name:${readable.name}</h1>
            <h1>Email:${readable.email}</h1>
            `)
           
        })
       
       
       

       
       
    }

   
    
    

}).listen(3000)