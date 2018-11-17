const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

//Only trigger incoming get requests - exact match
router.get('/', (request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.use('/', (request, response, next) => {
    console.log('In home middleware');
    next();
});

module.exports = router;