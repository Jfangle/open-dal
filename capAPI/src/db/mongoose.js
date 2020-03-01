 const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://OpenAdmin:<m15C4pst0n3>@cluster0-w7vkp.azure.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })


// Connection string to cloud database on Azure
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://OpenAdmin:<m15C4pst0n3>@cluster0-w7vkp.azure.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//  const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//  client.close();
//});


//Local db for testing purposes

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://OpenAdmin:<m15C4pst0n3>@cluster0-z4nqv.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

