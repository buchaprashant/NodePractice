const assert= require('assert');

exports.insertDoc = (db, document, collection, callback) => {
    const collec = db.collection(collection);
    return collec.insert(document);
};

exports.findDoc = (db, collection, callback) => {
    const collec = db.collection(collection);
    collec.find({}).toArray();
};

exports.removeDoc = (db, document, collection, callback) => {
    const collec = db.collection(collection);
    collec.deleteOne(document);
};

exports.updateDoc = (db, document, update, collection, callback) => {
    const collec = db.collection(collection);
    collec.updateOne(document, { $set: update }, null);
};