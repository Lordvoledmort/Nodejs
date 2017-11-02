let http =require('http');
let fs = require('fs');

let path = require('path');

let mime = require('mime');

let server = http.createServer();

server.listen(3000, ()=>{
    console.log('服务器已启动');

});

server.on('request',(req,res) => {

    //根据用户的不同请求，返回不同的内容
    //根据用户请求的地址 来判断用户
    //所需要内容
    //req.url 就是用户请求地址
    // if(req.url == 'index.html'){

    // }else if(req.url == 'kkk.jpg'){

    // }


   // console.log(req.url);

    if(req.url == '/'){
        res.writeHeader(200,{
            'Content-Type':'text/html;charset=UTF-8'
        });
        //读取文件然后将读取的内容响应给浏览器  fs处理文件 读取文件有可能成功有可能不成功 通过回调函数来执行
         
        fs.readFile('./index.html','utf-8',(err,data) => {
            if(!err){
                //console.log(data)
                res.write(data);
                res.end();
            }
        });
    } else {
        let realPath = path.join('./',req.url)
        fs.readFile(realPath,(err,data) => {
            if(!err){
                console.log(mime.getType(realPath));
                res.writeHeader(200, {
                    'Content-Type':mime.getType(realPath)
                });
                res.write(data);
                res.end();
            }
            
        });

    }
})