const request = require('request');
const heathrow = 'TW62GA';

const handlerTFL = (req, res, postcode) => {
   
    return responsePromise = new Promise((resolve, reject) => {
        
        const options = {
            url: `https://api.tfl.gov.uk/journey/journeyresults/${postcode}/to/${heathrow}`,
            json: true,
            headers: {
                app_id: "960a1776",
                app_key: "b84522d9deeed1510d0c6e573ee789b4"
            }
        }

        request(options, (err, response, body) => {
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