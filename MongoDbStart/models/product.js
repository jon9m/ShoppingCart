const getDb = require('../util/database').getDB;
const mongodb = require('mongodb');

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;

    if (id) {
      this._id = mongodb.ObjectID(id);
    }
  }

  save() {
    const db = getDb();
    let dbOp;

    console.log("this._id " + this._id);

    if (this._id) {
      //Update
      dbOp = db.collection('products').updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }

    //Collection to use - will create if not exist
    return dbOp
      .then(result => {
        //console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();

    return db.collection('products').find() //Find all - returns a cursor - doesn't return all at once
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(productId) {
    const db = getDb();

    return db.collection('products').find({ _id: mongodb.ObjectID(productId) }) //returns a cursor - doesn't return all at once
      .next()                                                 //Get the next in the cursor
      .then(product => {
        console.log(product);
        return product;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static deleteById(productId) {
    const db = getDb();

    return db.collection('products').deleteOne({ _id: mongodb.ObjectID(productId) })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = Product;
