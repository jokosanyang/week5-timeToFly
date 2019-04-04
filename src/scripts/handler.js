const fs = require('fs');
const path = require ('path');

const handlerHome = (request, response) => {
    const filePath = path.join(__dirname, '../../public/index.html');
    
    fs.readFile(filePath, (error, file) => {
        if(error){
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.end('<h1>Sorry, we had an internal issue</h1>');
        } else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(file);
        };
    });
};

const handlerPublic = (request, response, url) => {
    const extension = path.extname(url);
    const extensionType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.ico': 'image/vnd.microsoft.icon'
    };

    const filePath = path.join(__dirname, '../..', 'public', url);
    
    fs.readFile(filePath, (error, file) => {
        if(error){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>404. Unlucky mate!</h1>');
        } else{
            response.writeHead(200, {'Content-Type': extensionType[extension]});
            response.end(file);
        };
    });
}

module.exports = {
    handlerHome,
    handlerPublic    
}