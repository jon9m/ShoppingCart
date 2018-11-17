const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);


    response.setHeader('Content-Type', 'text/html');
    
    response.write('<html><body><p style="color:red;">From Node Server</p></body></html>');

    response.end();
    //process.exit(); //termnate the event loop!!!
});

server.listen(3000);
