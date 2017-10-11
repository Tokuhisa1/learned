// Imports Express from dependencies
const express = require('express');

// Initializes the application
const app = express();

// Sets the port, if not defined
const port = process.env.PORT || 3000;


// Tells the application which port to monitor
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Creates an index route
app.get('/', (req, res) => {
  res.send('Hello world!');
});
