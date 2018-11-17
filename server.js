const express = require('express');
const parser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const expressApp = express();

//register a middleware - do request body parsing - html form
expressApp.use(parser.urlencoded({ extended: false }));

//Middleware - 'use' will trigger for all requests
expressApp.use((request, response, next) => {
    //Next is a function passed by express to this function 
    //has to be executed to allow request to travel on to the next middleware

    console.log('In the moddleware');
    next();
});

//Order matters
expressApp.use(adminRoutes);
expressApp.use(shopRoutes);

expressApp.listen(3000);
