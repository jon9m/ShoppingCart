const express = require('express');
const parser = require('body-parser');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

const products = [];

//register a middleware - do request body parsing - html form
router.use(parser.urlencoded({ extended: false }));

router.get('/add-products', (request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', 'add-products.html'));
});

router.post('/products', (request, response, next) => {
    console.log(request.body);
    products.push(request.body);
    response.redirect('/');
});

exports.router = router;
exports.products = products;