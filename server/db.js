const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/mybti'

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient
        .connect(url)
        .then((client) => {
            console.log('Connected to MongoDB');
            dbConnection = client.db();
            return cb()
        })
        .catch((err) => {
            return cb(err)
        })
    },
    getDb: () => dbConnection,
}