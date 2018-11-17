const express = require('express');
const parser = require('body-parser');

const router = express.Router();

//register a middleware - do request body parsing - html form
router.use(parser.urlencoded({ extended: false }));

router.get('/add-products', (request, response, next) => {
    response.send(
        `<html>
            <body>
                <h2>Add Product</h2>
                <form action="/admin/products" method="POST">
                    <input type="text" name="title">
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>`
    );
});

router.post('/products', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
});

module.exports = router;