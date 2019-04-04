const request = require('request');
const handlerQueryAll = require('./handlerQueryAll');



const handlerFA = (req, res, flightno)=> {

    const username = 'JokoSanyang';
    const password = '776057661654d414dc8a119e561bed8bc5811ada';
    console.log('this is flightno: ', flightno)

    const url =`http://${username}:${password}@flightxml.flightaware.com/json/FlightXML3/FlightInfoStatus?ident=${flightno}`

    request(url, { json : true}, (err, response, body) => {
        if (err) {
            return console.log(err); 
        } 
    console.log(body);
            // console.log(body.FlightInfoStatusResult.flights[0]);

            return body.FlightInfoStatusResult.flights[0];
        })


}


module.exports = handlerFA;