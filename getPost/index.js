var http = require('http'),
    fs = require('fs'),
    path = require('path');

var renderError = function(res) {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("404 File Not Found");
};

var req = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        if (req.url == '/') {
            console.log('base url');
            res.writeHead(200, {'content-type' : 'text/html; charset:utf-8'});
            var basePath = path.join(__dirname, 'public/html/index.html')
            fs.createReadStream(basePath).pipe(res);
        } else if (req.url.match(/.html$/)) {
            var htmlPath = path.join(__dirname, 'public/html', req.url);
            res.writeHead(200, {'content-type' : 'text/html; charset:utf-8'});
            fs.createReadStream(htmlPath).pipe(res);
        } else if (req.url.match(/.css$/)) {
            var cssPath = path.join(__dirname, 'public/css', req.url);
            res.writeHead(200, {'content-type' : 'text/css; charset:utf-8'});
            fs.createReadStream(cssPath).pipe(res);
        } else if (req.url.match(/.jpg$/)) {
            var imagePath = path.join(__dirname, 'public/html', req.url);
            res.writeHead(200, {'content-type' : 'image/jpg; charset:utf-8'});
            fs.createReadStream(imagePath).pipe(res);
        } else {
            renderError(res);
        }

    } else {
        console.log("post received");
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            res.writeHead(200, {'content-type' : 'text/html; charset:utf-8'});
            res.end(body);
        });
    }
}).listen(3000);

req.on('error', function(err) {
    (err.message + "-----------");
});