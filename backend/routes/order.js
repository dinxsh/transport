const express = require("express")
const router = express.Router()
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", (req,res)=>{
    res.render("../../frontend/order/index.html")
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://blaze:Omshanti@2005@cluster0.hwwyw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connexted to db")
  client.close();
});

router.post('/', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    console.log('Name:', req.body.name);
    console.log('Number:', req.body.number);
    console.log('Address:', req.body.address);
    res.send(" Name: " +  req.body.name +  " Number: " +  req.body.number + " Address: "  + req.body.address)    
});

module.exports = router