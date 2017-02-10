var http = require('http');
var fs = require("fs");
var url = require("url");

var mainHtml = fs.readFileSync('views/html/main.html', 'utf8', function(err, data) {
    console.log("i m callback of complete");
});

var service = http.createServer(function(request, response){
    response.writeHead(200, 
        {'content-type': 'text/html'}
    );
    console.log(url.parse(request.url).pathname);
    if (url.parse(request.url).pathname == '/courses') {
        response.end("571 - web technologies");    
    } else {
        response.end(mainHtml);
    }
});

service.listen(3000);