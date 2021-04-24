var http = require('http');
var url = require('url');
var fs = require('fs')

http.createServer(function (request, response) {
    const { method, url, headers } = request

    // [2]
    if (method === "GET" && url === "/index.html") {
        response.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('index.html').pipe(response)
    } else if(url === "/fetch-example.json") {
        var waitTill = new Date(new Date().getTime() + 2 * 1000);
        while(waitTill > new Date()){}
        response.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('fetch-example.json').pipe(response)
    } else if(url === "/fetcher.js") {
        response.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('fetcher.js').pipe(response)
    }

}).listen(8100);