
const https = require("https");
const http = require("http");

function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}
function printError(error) {
    console.error(error.message);
}
function getProfile(username) {
    try{
     // Connect to the API URL  (https://teamtreehouse.com/profiles/tengyuancheng.json)
    const request = https.get(
        `https://teamtreehouse.com/profiles/${username}.json`,
        //if https protacal not typed, ERR_INVALID_URL will showed
        // The asynchronous call cannot be made without the correct protocal so this error is synchronous
        (response) => {
            if(response.statusCode == 200){
                    let body =""
                // console.dir(response.statusCode);
                //Read the data
                response.on('data', (data) => {
                    //In this case, the event to watch for is the data event.
                    //The data event occurs when data is received by our program.
                    body += data.toString();
                    //console.dir(data);
                });
                response.on("end",() => {
                    try{
                    //Parse the data
                    let profile = JSON.parse(body);
                    // console.dir(profile.points);
                    //change data to JSON mode to be readable.
                    printMessage(
                        username, 
                        profile.badges.length,
                        profile.points.JavaScript //Print the data
                    );
                    }catch(error){
                        printError(error);
                    }
                    //showed :Unexpected token < in JSON at position 0
                });
            }else{
                const message = `There was an error getting the profile for ${username} (${
                    http.STATUS_CODES[response.statusCode]
                })`;
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            }
        }
    );
    //request.on('error', error => console.error(error.code));
    // request.on('error', error => console.error(error));
    //error to print out the error or error.code to show wich error code it is 

    request.on("error", (error) =>   
        //console.error("The requested address was not found")
        printError(error)
        );
    }catch(error){
        // console.error(error.message);
        printError(error);
        //BUT THE URL itself cannot showed
    }
};
// getProfile("tengyuancheng");
const users = process.argv.slice(2);
users.forEach(getProfile);

