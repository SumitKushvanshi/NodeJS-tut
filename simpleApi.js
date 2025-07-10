const http =require('http');
const { json } = require('stream/consumers');

const data=[
    {
        name:'Sumit Kushwaha',
        age:20,
        email:'Sumit@gmail.com'
    },

    {
        name:'Rohit Kushwaha',
        age:25,
        email:'Rohit@gmail.com'
    },

    {
        name:'Ankush Kushwaha',
        age:30,
        email:'Ankush@gmail.com'
    },
]
http.createServer((req,res)=>{

    res.setHeader("Contant-Type","application/json");
    res.write(JSON.stringify(data))
  
}).listen(3000);