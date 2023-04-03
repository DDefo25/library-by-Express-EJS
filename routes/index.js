const express = require('express');
const apiRoute = require('./api');
const router = express.Router();

router.use('/api', apiRoute);

router.get('/', (_, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

module.exports = router;