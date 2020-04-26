let http=require('http');
let fs=require("fs");
http.createServer((req,res)=>{
    if (req.url==='/faviaon.ico') {
        return;//不处理
    }
    
})
console.log('B');
server.listen(4000,'127.0.0.1');