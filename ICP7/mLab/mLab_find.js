/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://nmvpd:nd@ND*123@ds135993.mlab.com:35993/tut9';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("tut9");
    dbase.collection("newCollection").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
