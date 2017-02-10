var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'search.yahoo.com',
    path: '/search/?p=flowers&hspart=mozilla&hsimp=yhs-001',
    port: 443,
    method: 'GET'
};


var req = https.request(options, function(res) {
    body = "";
    console.log("started downloading");
    console.log("statusCode: " + res.statusCode);
    res.setEncoding('UTF-8');
    res.once('data', function(data){
        console.log("first chunk");
        console.log(data);
    });

    res.on('data', function(data){
        body += data;
        console.log("chunk size" + data.length);
    });

    res.on('end', function(){
        fs.writeFile('flowers.html', body, function(err){
            if (err) {
                console.log(err.message);
            } else {
                console.log("Filw downloaded");
            }

        });
    });
}); 

req.on('error', function(err) {
    console.log(err.message);
});

req.end();





