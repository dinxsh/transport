const express = require("express")
const path = require("path")
const app = express()

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