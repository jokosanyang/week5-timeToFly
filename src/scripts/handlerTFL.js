const request = require('request');
const heathrow = 'TW62GA';

const handlerTFL = (req, res, postcode) => {
   
    return responsePromise = new Promise((resolve, reject) => {
        
        request(`https://api.tfl.gov.uk/journey/journeyresults/${postcode}/to/${heathrow}`, { json : true}, (err, response, body) => {
        if (err) {
            return reject(err); 
        } 
        
        const duration = body.journeys[0].duration;
        const directionsArr = [];
        const legsArr = body.journeys[0].legs;

        legsArr.forEach(element => {
            directionsArr.push(element.instruction.summary);
        });

        const objTFL = {
            legs: directionsArr,
            duration: duration};
        resolve(objTFL);
        })
      
    })
};

module.exports = handlerTFL;