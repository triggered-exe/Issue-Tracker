const express = require('express');
const app = express();

require('dotenv').config(); // Load environment variables from .env file

const mongoose = require("./config/mongoose.js");

const port = process.env.PORT || 8000;

const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'assets')));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use express router
app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log("error in listening on port", err);
    }
    console.log(`Server is running on port ${port}`);
})