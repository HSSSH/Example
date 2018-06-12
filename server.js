var http = require('http');
var fs = require('fs');   //文件系统相关
var path = require('path');  //文件系统路径相关
var mime = require('mime');  //根据文件扩展名得出MIME类型能力
var cache = {};             //缓存文件内容的对象

function send404(response) {
    response.writeHead(404,{'content-type':'text/plain'});
    response.write('Error 404: not found');
    response.end();
}

function sendFile(response,filePath,fileContent) {
    response.writeHead(200,{'content-type':mime.lookup(path.basename(filePath))});
    response.end(fileContent);
}

function serveStatic(response,cache,absPath) {
    if(cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    } else {
        fs.exists(absPath,function (exist) {
            if(exist){
                fs.readFile(absPath,function (err,data) {
                    if(err){
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response,absPath,data);
                    }
                })
            } else {
                send404(response);
            }
        })
    }
}

var server = http.createServer(function (request,response) {
    var filePath = false;
    if(request.url == '/'){
        filePath = 'static/app.html';
    }else {
        filePath = './' + request.url;
    }
    var absPath = './' + filePath;
    serveStatic(response,cache,absPath);
});

server.listen(3000,function () {   //监听TCP/IP端口3000
    console.log('Server listen on port 3000');
});

// chatServer.listen(server);