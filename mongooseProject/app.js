const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Enter a name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
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
    age: Number,
    favFruit: fruitSchema
})

const Person = mongoose.model("Person",personSchema)

const pineapple = new Fruit({
    name: "pineapple",
    score: 9,
    review: "Woah!"
})

pineapple.save();

/* const person = new Person({
    name: "Sumana",
    age: 19,
    favFruit: pineapple
}) */

const person = new Person({
    name: "Aniket",
    age: 19,
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

/* Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log("error")
    }
    else{
        console.log("Succesful")
    }
}) */

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);

        })
    }
});

Person.updateOne({name: "Aniket"}, {favFruit: banana}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successful");
    }
})

/* Fruit.deleteOne({name: "Apple"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted");
    }
}) */

Person.deleteMany({name: "Aniket"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted");
    }
})