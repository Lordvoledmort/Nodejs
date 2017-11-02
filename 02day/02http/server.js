let http = require('http');
let url = require('url');
let server = http.createServer();
let querystring = require('querystring');
server.listen(3000,(err) => {
    console.log('服务器已启动，监听3000端口')
});

server.on('request', (req,res) => {
    //请求
    //请求行，请求头、请求主体

    //请求行由 请求方式 + 请求地址
    //通过req.method 可以获得请求方式

    //console.log('您的请求方式为',req.method)

    //通过req.url可以获得请求地址
    console.log('您的请求地址为',req.url);

    //通过req.headers可以获得请求头
    //console.log('您的请求头为',req.headers);


    //当请求方式为post时 ，才会有请求主体 (请求主体主要是参数)
    //当请求方式为get时，没有请求主体，参数放到地址上

    //如果get方式请求，可以通过解析地址来获得参数
    //nodejs 提供了专门模块url()来解析地址上的参数

    // let params = url.parse(req.url,true);
    // console.log(params);


    //当请求方式为post时，才会有请求主体（请求主体主要是参数）
    //当数据以post方式上传时，会触发一个事件 data 事件
    
    let formData = '';
    req.on('data', (chunk) => {
        // console.log(1);
        // console.log(chunk);
        formData += chunk;
    });

    //当post数据传输完毕时会触发另一个事件end
    req.on('end',() => {
        //得到的数据为一个字符串使用不方便
        //可以使用系统模块 querystring来解析
         console.log(formData);

         let params = querystring.parse(formData);
         console.log(params);
    });
   
    //请求头 键值对
    //请求主体 get 方式没有请求主体

    // post 可以有
    res.end();


})