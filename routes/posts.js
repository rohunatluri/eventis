var express = require('express');
var router = express.Router();

/* GET events listings. */
router.get('/posts', function(req, res, next) {
    var db = req.db;
    var collection = db.get('events');
//    var lat = req.query.lat;
//    var long = req.query.long;
    //limit find to 10 entries
//    console.log('lat is '+lat+' long is '+long);
    collection.find({location:{$near:[Number(req.query.lat),Number(req.query.long)], $maxDistance: 0.05}},{limit:10},function(e,docs){
        res.json(docs);
    });
});

/* POST to addevent */
router.put('/addevent', function(req,res){
    var db = req.db;
    var collection = db.get('events');
    collection.insert(req.body, function(err, result){
        res.send(
            (err===null) ? {msg: ''} : {msg: err }
        );
    });
});

module.exports = router;
