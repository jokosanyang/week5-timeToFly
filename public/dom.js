const inputPostCode = document.querySelector('#postcode');
const inputFlightno = document.querySelector('#flightno');
const form = document.querySelector('#form');
const button = document.querySelector('#submitbtn');

const callBackEnd = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    
    const urlStr = `query?postcode=${inputPostCode.value}&flightno=${inputFlightno.value.toUpperCase()}`;

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200){
            // console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);

            const directionsArr = response[0].legs;
            
            const journeyInSecs = response[0].duration * 60;
            const epoch = response[1];
            
            const timeToBeAtAirport = epoch - 600 - 7200;
            const timeToLeaveUnix = timeToBeAtAirport - journeyInSecs;
            const fullTimeToLeave = new Date(timeToLeaveUnix * 1000);
            const dateToLeave = fullTimeToLeave.toDateString();
            const exactTimeToLeave = fullTimeToLeave.toLocaleTimeString();
            console.log(exactTimeToLeave);

            document.getElementById('time-result').innerHTML = 
            "In order to be at the airport two hours early, you need to leave at: " + "<br>" + exactTimeToLeave + " on " + dateToLeave + "<br><br>"
            + "Here's how to get there: "; 

            //    list of directions in html
            const orderedList = document.getElementById('ordered-directions');

            while(orderedList.getElementsByTagName('li').length > 0){                
                orderedList.removeChild(orderedList.childNodes[0]);
            };

           //creating a list of directions
           directionsArr.forEach(a => {
               li = document.createElement('LI');
               legNo = directionsArr.indexOf(a);
               li.setAttribute(
                "aria-label", `This is leg ${legNo+1} of your journey`);
               textnode = document.createTextNode(a);
               li.appendChild(textnode);
               orderedList.append(li);
           });
        // appends completed OL to our directions-container
           document.getElementById('directions-container').appendChild(orderedList);
        } else {
            console.error('Something is wrong');
        }
    }
    xhr.open('GET', urlStr, true);
    xhr.send();
}

form.addEventListener('submit', callBackEnd);

