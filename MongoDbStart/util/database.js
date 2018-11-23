const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  mongoClient.connect('mongodb+srv://manoj:Zaq!xsw2cde3@cluster0-2m8vj.mongodb.net/shop?retryWrites=true')
    .then(client => {
      console.log('Connected!');
      _db = client.db(); //client.db('anotherDatabase') - can connect to a another database passing param - will create a new if it not exist
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

getDB = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
}

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;