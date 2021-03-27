//Dependecies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();


//Environment Variables
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT;


//Controlers
const bookreactsController = require('./controllers/bookreacts')

// ... other imports 
const path = require("path")

//Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
console.log('MongoDB connection established:'),
);

//Error/Disconnection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

//Middleware
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.urlencoded({extended: false}));
app.use(express.json());//return middleware that parses only JSON

//Route
// app.get('/', (req, res) =>{
//     res.send('Hi, the route is working fne.')
// });
app.use('/bookreacts', bookreactsController);

//catch any route that doenst exist
app.get('*', (req, res)=> {
    res.status(404).json('Sorry, page does not exist');
});

app.listen(PORT, () => { 
    console.log("App is listening on port", PORT);
});