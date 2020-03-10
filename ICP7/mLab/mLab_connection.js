/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://nmvpd:nd@ND*123@ds135993.mlab.com:35993/tut9'; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
        if (err) throw err;
        console.log("Connected correctly to server");
        db.close();
    }
)
;
