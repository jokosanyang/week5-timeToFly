const request = require('request');
const heathrow = 'TW62GA';
const handlerQueryAll = require('./handlerQueryAll');

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

        const objTFL = {
            legs: directionsArr,
            duration: duration};

        console.log(objTFL);
        return objTFL;
        })       
};

module.exports = handlerTFL;