//通过系统模块创建http服务器
let http = require('http');

//通过createSever可以创建服务器实例
let server = http.createServer();

//通过listen监听一个端口

server.listen(3000);

//通过事件监听来处理请求和响应 request
//通过 on 来实现事件的监听

server.on('request',(req,res) => {
    //通过req来处理请求
    // 通过res来处理响应

    //响应 由状态行、响应头、响应主体构成
    //通过writeHead()来设置状态行和响应头

    res.writeHead(200,{
        'Content-Type' : 'text/html;charset = UTF-8'
    });


    //通过write 来设置响应主体，允许 执行多次
    res.write('你好aa nodejs');

    res.end();
})