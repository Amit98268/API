

require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');

// Setup an express app
var app = express();
// **************************

// Database connection here
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection done"));

// ********************

// **************************

// CORS config will be here

// ********************

// view engine setup
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
*/
// Configure middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require routes
const StockManagementRouter = require("./routes/Stock_Management.js");
const OrderNoticeRouter = require("./routes/OrderNotice");
const BillingRouter = require("./routes/BillingManagement");


//**********Api Call***************//

app.use("/Stock_M", StockManagementRouter);
app.use("/OrderNotice", OrderNoticeRouter);
app.use("/BillingManagement", BillingRouter);

module.exports = app;

var port = 3021;
app.listen(port, () => {
  console.log("server running on port : ", port);
})