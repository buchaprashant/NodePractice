const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/conFusion";

mongoClient.connect(url,  (err,db)=>{
    assert.equal(err,null);
    console.log("Connected to server correctly");
    const collection = db.collection("dishes");
    collection.insert({"name":"mithai", "description":"Good"},
        (err,result)=>{
            assert.equal(err,null);
            console.log("\nAfter Insert:");
            console.log(result.ops);

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);
            console.log("\nFound:");
            console.log(docs);

            db.dropCollection("dishes", (err,result) =>{
                assert.equal(err,null);
                db.close();
            });
        });
    });
});