const request = require('request');
const heathrow = 'TW62GA';



const handlerTFL = (req, res, postcode) => {
   
    request(`https://api.tfl.gov.uk/journey/journeyresults/${postcode}/to/${heathrow}`, { json : true}, (err, response, body) => {
        if (err) {
            return console.log(err); 
        } 
        
        const duration = body.journeys[0].duration;

        const directionsArr = [];
        const legsArr = body.journeys[0].legs;
        legsArr.forEach(element => {
            directionsArr.push(element.instruction.summary);
        });

        

        }) 

        res.end("hi this is coming from the back");
        // console.log("time: ", duration); 
        // console.log('directions: ', directionsArr);
        // return directionsArr;
        // response.writeHead(200, {'Content-Type': 'text/html'});
        // response.end(directionsArr, duration);
};


module.exports = handlerTFL;