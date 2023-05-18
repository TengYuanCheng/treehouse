
const https = require("https");
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}

function getProfile(username) {
    try{

     // Connect to the API URL  (https://teamtreehouse.com/profiles/tengyuancheng.json)
    const request = https.get(
        `https://teamtreehouse.com/profiles/${username}.json`,//teamtreehouse.com
        (response) => {
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
                //Parse the data
                let profile = JSON.parse(body);
                // console.dir(profile.points);
                //change data to JSON mode to be readable.
                printMessage(
                    username, 
                    profile.badges.length,
                    profile.points.JavaScript //Print the data
                );
            });
        }
    );
    //
    // request.on('error', error => console.error(error.code));
    //error to print out the error or error.code to show wich error code it is 

    request.on('error', error =>  
        console.error("The requested address was not found")
    );
    }  catch(error){
        console.error(error.message); //CANNOT PRINT URL YET 
    }
};
// getProfile("tengyuancheng");
const users = process.argv.slice(2);
users.forEach(getProfile);

