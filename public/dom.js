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

            const responseArr = JSON.parse(xhr.responseText);
            const directions = responseArr[0].legs;

        //    list of directions in html
         const orderedList = document.getElementById('ordered-directions');

            while(orderedList.getElementsByTagName('li').length > 0){                
                orderedList.removeChild(orderedList.childNodes[0]);
            };

           //creating a list of directions
           directions.forEach(a => {
               li = document.createElement('LI');
               textnode = document.createTextNode(a);
               li.appendChild(textnode);
               orderedList.append(li);
           });
        // appends completed OL to our directions-container
           document.getElementById('directions-container').appendChild(orderedList);
        } 
        else {
            console.error('Something is wrong');
        }
    }
    xhr.open('GET', urlStr, true);
    xhr.send();
}

form.addEventListener('submit', callBackEnd);
