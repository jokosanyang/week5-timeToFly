const request = require('request');
require('env2')('config.env');

const handlerFA = (req, res, flightno)=> {
   
    return responsePromise = new Promise((resolve, reject) => {

    const username = process.env.FA_USER;
    const password = process.env.FA_PASS;
    
    const url =`http://${username}:${password}@flightxml.flightaware.com/json/FlightXML3/FlightInfoStatus?ident=${flightno}`

    request(url, { json : true}, (err, response, body) => {
        if (err) {
       reject(err); 
        }
            resolve(body.FlightInfoStatusResult.flights[0].estimated_departure_time.localtime);
        })
    })

}


module.exports = handlerFA;