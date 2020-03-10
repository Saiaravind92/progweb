/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://nmvpd:nd@ND*123@ds135993.mlab.com:35993/tut9';

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbase = db.db("tut9");
    var myquery = {address: /^S/};
    var newvalues = {$set: {name: "Minnie"}};
    var myoptions = {multi: true};
    dbase.collection("newCollection").updateMany(myquery, newvalues, myoptions, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " record(s) updated");
        db.close();
    });
});
