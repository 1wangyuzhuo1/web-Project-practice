let http=require('http');
let fs=require("fs");
let server=http.createServer((req,res)=>{
    if (req.url==='/faviaon.ico') {
        return;//不处理
    }
    if (req.url=='b.txt') {
        //因为昰一部，所以需要写回调函数
        //两个参数（error data）
        fs.readFile('B.txt',function(error,data){
            res.end(data);
        });
    }else{
        res.end("node hello world");
        console.log('A');
    }
    
})
console.log('B');
server.listen(4000,'127.0.0.1');