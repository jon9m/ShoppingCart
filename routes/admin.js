const express = require('express');

const router = express.Router();

router.get('/add-products', (request, response, next) => {
    response.send(
        `<html>
            <body>
                <h2>Add Product</h2>
                <form action="/products" method="POST">
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