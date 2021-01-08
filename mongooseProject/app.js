const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name : "Apple",
    score : 8,
    review : "Great fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person",personSchema)

const person = new Person({
    name: "Aniket",
    age: 19
})

person.save();

const kiwi = new Fruit({
    name: "kiwi",
    score: 8,
    review: "Best!"
});

const orange = new Fruit({
    name: "orange",
    score: 6,
    review: "Eh!"
});

const banana = new Fruit({
    name: "banana",
    score: 3,
    review: "Weird"
});

Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log("error")
    }
    else{
        console.log("Succesful")
    }
})


const findDocuments = function(db, callback){
    //Get the documents collection
    const collection = db.collection('fruits');
    //Find some documents
    collection.find({}).toArray(function(err,docs){
        assert.strictEqual(err,null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    })
}