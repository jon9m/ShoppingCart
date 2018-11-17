const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const adminData = require('./admin');

//Only trigger incoming get requests - exact match
router.get('/', (request, response, next) => {
    // response.sendFile(path.join(rootDir, 'views', 'shop.html'));

    const products = adminData.products;
    response.render('shop', { prods: products, title: 'Shop' });
});

router.use('/', (request, response, next) => {
    console.log('Products ', adminData.products);
    next();
});

module.exports = router;