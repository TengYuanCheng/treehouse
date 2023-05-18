// Import Express and set up the app
const express = require('express');
const app = express();

//* Export the `router` and import the module into 'app.js'
const routes = require('./routes');

//Import 404 and global error handlers into app.js
//and assigned it to the constant errorHanlders
const errorHandlers = require('./errorHandlers');

//Use `app.use()` to pass the new `routes` module to the Express app
app.use(routes);

// Pass 404 and global error handlers to the app
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})