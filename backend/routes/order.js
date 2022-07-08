const express = require("express")
const router = express.Router()
var bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", (req,res)=>{
    res.render("../../frontend/order/index.html")
})

const uri = "mongodb+srv://blaze:Omshanti%402005@cluster0.hwwyw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

router.post('/', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);
    console.log('Name:', req.body.name);
    console.log('Number:', req.body.number);
    console.log('Address:', req.body.address);
    res.send(" Name: " +  req.body.name +  " Number: " +  req.body.number + " Address: "  + req.body.address)    
    InsertOrder(req.body.name, req.body.number, req.body.address)
});

module.exports = router