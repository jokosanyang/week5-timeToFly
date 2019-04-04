const handlerTFL = require('./handlerTFL');
const handlerFA = require('./handlerFA');
const urlMod = require('url');


const handlerQueryAll = (request, response, url) => {
    let parsedQuery = urlMod.parse(url, true);
    const postcode = parsedQuery.query.postcode;
    const flightno = parsedQuery.query.flightno;
    const promiseTFL =  handlerTFL(request, response, postcode);
    const promiseFA = handlerFA(request, response, flightno);


    return Promise.all([
        promiseTFL,
        promiseFA
    ]).then(promiseResults => {
        tflObj = promiseResults[0]
        flightCancelled = promiseResults[1]
        response.end(JSON.stringify(promiseResults));
    }).catch(error => {
        console.log(error);
        response.writeHead(404, {'content-type': 'text/html'})
        response.end(error.message);
    })


    console.log('TFL from query: ', objTFL);
    console.log('FA from query: ', objFA);

    // const combinedObj = {...objTFL, ...objFA};

//     response.writeHead(200, {'Content-Type': 'application/json'});
//     response.end(JSON.stringify(combinedarr));
}

module.exports = handlerQueryAll;
