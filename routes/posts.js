var express = require('express');
var router = express.Router();

/* GET events listings. */
router.get('/posts', function(req, res, next) {
    var db = req.db;
    var collection = db.get('events');
/*    collection.aggregate({$limit:10},function(e,docs){
        res.json(docs);
    });*/
    //limit find to 10 entries
    collection.find({},{},function(e,docs){
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