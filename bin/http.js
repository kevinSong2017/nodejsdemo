var http=require('http')

/*
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'})//显示的写回了响应代码200（表示请求成功），指定请求头，
    res.write('<h1>Node.js</h1>>');//写入响应体
    res.end('<p>Hello World</p>');//调用end 结束并发送
}).listen(3000)//调用listen函数，启动服务器，监听3000端口

console.log("Http server is listening at port 3000。")
*/

/**
 * 怎么发送get请求
 *
 *
 * */
/*
 var url=require('url')
 var util=require('util')

 http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end(util.inspect(url.parse(req.url,true)))
}).listen(3000)
*/


/**
 * 获取post请求内容
 *
 */

/*
var querystring=require('querystring');
var util=require('util');
http.createServer(function (req,res) {
    var post='';
    req.on('data',function (chunk) {
        post+=chunk;
    })
    req.on('end',function () {
        post=querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000)

*/


















