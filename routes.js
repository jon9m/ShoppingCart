const fs = require('fs');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        response.write(`
            <html>
                <body>
                    <h2>HTML Forms</h2>
                    <form action="/message" method="POST">
                        <input type="text" name="name">
                        <input type="submit" value="Submit">
                    </form>
                </body>
            </html>`);
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        request.on('data', (chunk) => {
            console.log("chunk ", chunk);
            body.push(chunk);
        });

        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody " + parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }

    response.write(`
            <html>
                <body>
                    <h2>Message</h2>
                </body>
            </html>`);

    response.end();
};

//Same
// module.exports = requestHandler;
// exports.handler = requestHandler;
module.exports = {
    handler: requestHandler
};