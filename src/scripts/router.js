const handler = require('./handler');
const handlerQueryAll = require('./handlerQueryAll')

const routeArr = [
    "/assets/favicon.ico",
    "/css/normalise.css",
    "/css/style.css",
    "/dom.js",
];

const router = (request, response) => {
    const url = request.url;

    if(url == '/'){
        handler.handlerHome(request, response);

    } else if(routeArr.includes(url)){
        handler.handlerPublic(request, response, url);

    } else if(url.includes('query')){
        handlerQueryAll(request, response, url);

    } else{
        handler.handlerError(request, response);
    }
} 

module.exports = router;