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

            // console.log("it works", xhr.responseText);//array

            const responseArr = JSON.parse(xhr.responseText);
            // console.table(responseArr)

            let directions = responseArr[0].legs;
            // console.log(directions);

           stringDirections =  directions.join('\n');
           console.log(stringDirections)


           document.getElementById('directions-container').textContent = stringDirections;

        } 
        else {
            console.error('Something is wrong');
        }
    }
    xhr.open('GET', urlStr, true);
    xhr.send();
}

form.addEventListener('submit', callBackEnd);
