let http = require('http');

let fs = require('fs');

let path = require('path');

let mime = require('mime');

let server  = http.createServer();

server.listen(3001,() => {
    console.log('服务器已启动');
});
server.on('request',(req,res) => {

    if(req.url == '/'){
         console.log(1)
        res.writeHeader(200,{
            'Context-Type' : 'text/html;charset=UTF-8'
        });

        fs.readFile('./blog.html','utf-8',(err,data) =>{
            if(!err){
                res.write(data);
                res.end();
            }
        });
    }else {
        let realPath = path.join('./',req.url)
        fs.readFile(realPath,(err,data) =>{
            if(!err){
                console.log(mime.getType(realPath));
                res.writeHeader(200,{
                    'Content-Type':mime.getType(realPath)
                });
            }
            res.write(data);
            res.end();
        })
    }
})