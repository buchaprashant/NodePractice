const mongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
const dboper = require('./operations');

const url = "mongodb://127.0.0.1:27017/conFusion";

mongoClient.connect(url, function(err,db){
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
        console.log("\nFound: " + JSON.stringify(docs));
        return dboper.updateDoc(db, { name: "Vadonut" },{ description: "Updated Test" }, "dishes")
    })
    .then((result) => {
        console.log("Updated Document:\n", JSON.stringify(result.result));
        return dboper.findDoc(db, "dishes")
    })
    .then((docs) => {
        //assert.equal(err,null);
        console.log("\nFound: " + JSON.stringify(docs));
        return db.dropCollection("dishes")
    })
    .then((result) => {
        console.log("Dropped Collection: ", JSON.stringify(result));
        db.close();
    })
    .catch((err) => {console.log(err)});
});

