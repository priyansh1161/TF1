var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let mode = process.env.PORT ? 'prod' : 'dev';
    res.render('index', { title: 'Express', mode });
});

module.exports = router;
