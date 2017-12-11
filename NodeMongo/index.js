const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = "mongodb://localhost:27017/conFusion";

mongoClient.connect(url)
.then((err,db)=>{
    assert.equal(err,null);
    console.log("Connected to server correctly");
    const collection = db.collection("dishes");
    
    dboper.insertDoc(db, { name: "Vadonut", description: "Test"}, "dishes")
    .then((result)=>{
        console.log("\nInsert Document: " +result.ops);
        return dboper.findDoc(db, "dishes");
    })
    .catch((err) => {
        console.log(err);
    })
    .then((docs) => {
        assert.equal(err,null);
        console.log("\nFound: " + docs);
        return dboper.updateDoc(db, { name: "Vadonut" },{ description: "Updated Test" }, "dishes")
    })
    .catch((err) => {
        console.log(err);
    })
    .then((result) => {
        console.log("Updated Document:\n", result.result);                    
        return dboper.findDoc(db, "dishes")
    })
    .catch((err) => {
        console.log(err);
    })
    .then((docs) => {
        assert.equal(err,null);
        console.log("\nFound: " + docs);
        return db.dropCollection("dishes")
    })
    .catch((err) => {
        console.log(err);
    })
    .then((result) => {
        console.log("Dropped Collection: ", result);
        db.close();
    })
    .catch((err) => {
        console.log(err);
    })
.catch((err) => {console.log(err);})
});

