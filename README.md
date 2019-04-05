# HBJ -- TimeToFly -- README 
## :honeybee: Overview  
> Created by: @jokosanyang @baalwaan @hrmstockdale

This repo contains our Founders and Coders Week 5 project. 

The app is live on Heroku. Access it using [this link](https://time-to-fly.herokuapp.com/)!

---

## :floppy_disk: How to run the project locally 

1. git clone `https://github.com/FAC-Sixteen/week5-timeToFly.git`
2. cd into the repo
3. run `npm i` to install node modules
4. `npm run go` can be run to keep the server live
5. in your browser, go to `localhost:5000`

---

## :chart_with_upwards_trend: Our process  
<!-- ![trust the process gif](https://media.giphy.com/media/xULW8NXWojLH6L0TUA/giphy.gif) -->

1. Brainstormed ideas
2. Narrowed down ideas by testing potential APIs 
3. Listed out desired features and stretch features
4. Drew out user journey, design layout and file structure
5. Planned a list of steps to ensure said functionality
6. Deployed basic page to Heroku
7. Wrote all functions as a group of 3
8. Styled the page

![front-to-back-to-front-again](https://i.imgur.com/2kZVva0.jpg)

---

## 🏋️‍ What we struggled with  
* when to use the `res.end()`
> end() means end.
> ![there can only be one gif![Uploading file..._mv34dhljf]()
](https://media.giphy.com/media/5rjEsJnmsUF2CxGg5e/giphy.gif)
* request requests
* merging the responses from two API requests into one to return to the front
* dead parameters
* Validation
> lowercase flightnos are a no-no


---

## :bulb: What we learned 
* adhoc intro to Promises.
    * Promises.all() method
    * Promise.prototype.then() method
* request module
* URL module (see [w3schools](https://www.w3schools.com/nodejs/nodejs_url.asp))
    * urlMod.parse(address, true) method
    * .query - returns object

---

## :clock6: Stretch goals
* make it pretty
* modularising dom.js
* different airports
* Alert message if user is soon to miss flight

---

## :wrench: Built with 

* DevDependencies 
    * nodemon
    * supertest
    * request
    * tape
    * tap-spec
* HTML
* CSS
* Javascript

---
