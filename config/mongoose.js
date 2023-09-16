const mongoose = require('mongoose');

// Load environment variables from .env file
require("dotenv").config();

    const mongo_url = process.env.MONGO_URL;
    mongoose.connect(mongo_url , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const dbConnection = mongoose.connection;
    
    dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    dbConnection.once('open', () => {
        console.log('Connected to database');
    });

module.exports = mongoose;