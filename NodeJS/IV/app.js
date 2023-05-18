/*
const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {

    });

    response.on("", () => {
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});
*/
/*
Challenge Task 1 of 2
Without renaming any of the variables, modify the data callback to concatenate 
the stream of data to the responseBody.

Callenge Task 2 of 2
See the console.log(responseBody); in that callback around line 10? Fix
 the listener so that the callback gets executed when the response has fully finished.
*/


const https = require("https");
const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
    let responseBody = "";

    response.on("data", dataChunk => {
        responseBody += dataChunk.toString();//Q1 Set responseBody as dataChuk to string
    });

    response.on("end", () => { //Q2: add end
        console.log(responseBody);
    });

});

request.on("error", error => {
    console.error(error.message);
});