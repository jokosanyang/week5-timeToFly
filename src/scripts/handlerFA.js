const request = require('request');
const handlerQueryAll = require('./handlerQueryAll');



const handlerFA = (req, res, flightno)=> {
   
    return responsePromise = new Promise((resolve, reject) => {

    const username = 'JokoSanyang';
    const password = '776057661654d414dc8a119e561bed8bc5811ada';
    console.log('this is flightno: ', flightno)

    const url =`http://${username}:${password}@flightxml.flightaware.com/json/FlightXML3/FlightInfoStatus?ident=${flightno}`

    request(url, { json : true}, (err, response, body) => {
        if (err) {
            return reject(err); 
        } 
        // console.log('FA from handlerFA:', body);
        console.log('FA from handlerFA:', body.FlightInfoStatusResult.flights[0]);

            resolve(body.FlightInfoStatusResult.flights[0].estimated_departure_time.localtime);
        })
    })

}


module.exports = handlerFA;