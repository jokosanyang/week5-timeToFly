const handlerTFL = require('./handlerTFL');
const handlerFA = require('./handlerFA');
const urlMod = require('url');


const handlerQueryAll = (request, response, url, (err, cb) => {
    if (err) {
        return console.log(err);
    } else {
        return bigObj(objTFL, objFA);      
    }
    
}) => {
    let parsedQuery = urlMod.parse(url, true);
    const postcode = parsedQuery.query.postcode;
    const flightno = parsedQuery.query.flightno;
    const objTFL =  handlerTFL(request, response, postcode);
    const objFA = handlerFA(request, response, flightno);

    console.log(objTFL);
    console.log(objFA);


    // const combinedObj = {...objTFL, ...objFA};
    function bigObj(objTFL, objFA) {
        return Object.assign(objTFL, objFA);
    }
    
    

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(combinedarr));
}

module.exports = handlerQueryAll;