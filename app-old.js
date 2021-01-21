const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'neftali',
            edad: '36',
            url: request.url
        }
        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');