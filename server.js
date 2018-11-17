const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const expressApp = express();

const rootDir = require('./util/path');

expressApp.set('view engine', 'pug');
expressApp.set('views', 'views'); //default is views folder

//Static file middleware - css
expressApp.use(express.static(path.join(__dirname, 'public')));


//Middleware - 'use' will trigger for all requests
expressApp.use((request, response, next) => {
    //Next is a function passed by express to this function 
    //has to be executed to allow request to travel on to the next middleware

    console.log('In the moddleware');
    next();
});

//Order matters
expressApp.use('/admin', adminRoutes.router); //URL filtering
expressApp.use(shopRoutes);

//Catch all middleware
expressApp.use((request, response, next) => {
    // response.status(404).send('<h1>Page not found!</h1>');
    response.sendFile(path.join(rootDir, 'views', '404.html'));
});

expressApp.listen(3000);