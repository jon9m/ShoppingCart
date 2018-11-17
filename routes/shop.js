const express = require('express');

const router = express.Router();

//Only trigger incoming get requests - exact match
router.get('/', (request, response, next) => {
    response.send('<h3>Hello from express</h3>');
});

router.use('/', (request, response, next) => {
    console.log('In home middleware');
    next();
});

module.exports = router;