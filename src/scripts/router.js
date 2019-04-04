const handler = require('./handler');
const urlMod = require('url');
const handlerFA = require('./handlerFA');
const handlerTFL = require('./handlerTFL');

const routeArr = [
    "/assets/favicon.ico",
    "/css/normalise.css",
    "/css/style.css",
    "/dom.js",
    "/assets/favicon.ico"
];

const router = (request, response) => {
    const url = request.url;

    if(url == '/'){
        handler.handlerHome(request, response);


    } else if(routeArr.includes(url)){
        handler.handlerPublic(request, response, url);


    } else if(url.includes('query')){

        let parsedQuery = urlMod.parse(url, true);
        const postcode = parsedQuery.query.postcode;
        const flightno = parsedQuery.query.flightno;
        handlerTFL(request, response, postcode);
        handlerFA(request, response, flightno);
    
        
        
        
        

    } else{
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('<h1>404. Sorry Buddy.</h1>');
    }

} 


module.exports = router;