// imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const user = require('./routes/user.js');
const MongoDB = require('./database/db.js');

// app init
const app = express();
const port = process.env.PORT || 8080;  // PORT set by env or 8080
app.use(morgan('tiny'));                // logging requests
app.use(cors());                        // enable CORS
app.use(bodyparser.json());             // body-parser for json
app.use(bodyparser.urlencoded({         // body-parser for urlencoded
    extended: false
}));

// db init
const mongodb = new MongoDB();

// default route
app.get('/', (req, res) => {
    res.send('Yep, works!');
});

// use routers
app.use('/user', user);

// listen to port or 8080
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});