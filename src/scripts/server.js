const http = require('http');
const router = require('./router');

const server = http.createServer(router);

// const hostname = process.env.HOSTNAME || 'localhost'; // <<<revisit later for better understanding

const port = process.env.PORT || 5000;

server.listen(port, console.log(`Server now listening on port ${port}`))