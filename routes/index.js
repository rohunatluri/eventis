var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Eventis' });
    console.log('Received connection from '+ req.ip)
});

/* GET create page page. */
router.get('/createevent', function(req, res, next) {
  res.render('create', { title: 'Eventis' });
});

/* GET table page. */
router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Eventis' });
});

module.exports = router;