const express = require("express")
const router = express.Router()
var bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", (req,res)=>{
    res.render("../../frontend/order/index.html")
})

router.get("/view", (req,res)=>{
  res.render("../../frontend/order/view-order.html")
})

async function InsertOrder(name, number, date, fromaddr, toaddr) {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);         
         const col = db.collection("test");
         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": name,
             "date": date,
             "number": number,
             "from-addr": fromaddr,
             "toaddr": toaddr
         }
         // Insert a single document, wait for promise so we can read it back
        //  const p = await col.insertOne(personDocument);
         const q = await col.deleteOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

router.post('/', urlencodedParser, (req, res) => {
    console.log('Got body:', req.body);        
    InsertOrder(req.body.name, req.body.number, req.body.date,  req.body.fromaddr, req.body.toaddr)    
});

module.exports = router