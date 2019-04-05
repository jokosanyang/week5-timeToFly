const inputPostCode = document.querySelector('#postcode');
const inputFlightno = document.querySelector('#flightno');
const form = document.querySelector('#form');
const button = document.querySelector('#submitbtn');

const callBackEnd = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    const urlStr = `query?postcode=${inputPostCode.value}&flightno=${inputFlightno.value}`;

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            // console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);

            const directionsArr = response[0].legs;
            
            const directions = ""; // insert Burhan's directions code here

            const journeyInSecs = response[0].duration * 60;
            const epoch = response[1];
            
            const timeToBeAtAirport = epoch - 600 - 7200;
            const timeToLeaveUnix = timeToBeAtAirport - journeyInSecs;
            const realTimeToLeave = new Date(timeToLeaveUnix * 1000);
            console.log(realTimeToLeave);

            document.getElementById('time-result').innerHTML = 
            "In order to be at the airport two hours early, you need to leave at: " + "<br>" + realTimeToLeave + "<br><br>"
            + "Here's how to get there: " + "<br>" + directions; 
            

        } else {
            console.error('Something is wrong');
    }
    }
    xhr.open('GET', urlStr, true);
    xhr.send();
}

form.addEventListener('submit', callBackEnd);

form.addEventListener('keypress', event => {  
    let key = event.keyCode;
    if (key === 32) {
      event.preventDefault();
    }
});
