const express = require("express")
const path = require("path")
const app = express()

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname)));
app.use(express.static('../frontend/'));

// routes
const MainRouter = require("../backend/routes/main")
const OrderRouter = require("../backend/routes/order")

app.use("/", MainRouter)
app.use("/order", OrderRouter)

app.listen(3000, ()=> console.log("Server Started"))