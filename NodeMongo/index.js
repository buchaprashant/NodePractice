const mongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
const dboper = require('./operations');

const url = "mongodb://127.0.0.1:27017/conFusion";

<<<<<<< HEAD
mongoClient.connect(url)
.then((db)=>{
=======
mongoClient.connect(url, function(err,db){
>>>>>>> 8e09bfe7e4b42c52961f099ea7f03dc8aaaaae4f
    //assert.equal(err,null);
    console.log("Connected to server correctly");
    const collection = db.collection("dishes");
    dboper.insertDoc(db, { name: "Vadonut", description: "Test"}, "dishes")
    .then((result)=>{
        console.log("\nInsert Document: " + JSON.stringify(result.ops));
        return dboper.findDoc(db, "dishes");
    })
    .then((docs) => {
        //assert.equal(err,null);
<<<<<<< HEAD
        console.log("\nFound: " + docs);
=======
        console.log("\nFound: " + JSON.stringify(docs));
>>>>>>> 8e09bfe7e4b42c52961f099ea7f03dc8aaaaae4f
        return dboper.updateDoc(db, { name: "Vadonut" },{ description: "Updated Test" }, "dishes")
    })
    .then((result) => {
        console.log("Updated Document:\n", JSON.stringify(result.result));
        return dboper.findDoc(db, "dishes")
    })
    .then((docs) => {
        //assert.equal(err,null);
<<<<<<< HEAD
        console.log("\nFound: " + docs);
=======
        console.log("\nFound: " + JSON.stringify(docs));
>>>>>>> 8e09bfe7e4b42c52961f099ea7f03dc8aaaaae4f
        return db.dropCollection("dishes")
    })
    .then((result) => {
        console.log("Dropped Collection: ", JSON.stringify(result));
        db.close();
    })
<<<<<<< HEAD
    .catch((err) => {
        console.log(err);
    })
    .catch((err) => { console.log(err); } );
})
.catch((err) => { console.log(err); } );
=======
    .catch((err) => {console.log(err)});
});
>>>>>>> 8e09bfe7e4b42c52961f099ea7f03dc8aaaaae4f

