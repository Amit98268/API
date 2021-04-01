const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const stock_m = new Schema({
  
products:String,


  orderId:
  {
    type: String,
    required: true
  },
  deliveryDate:
  {
    type: String,
    required: true
  },
  note:
  {
    type: String,
    required: true
  },
  select_product:
  {
    type: Number,
    required: true
  },
  company:
  {
    type: String,
    required: true
  },
  grade:
  {
    type: String,
    required: true
  },
  topcolor:
  {
    type: String,
    required: true
  },
  coatingnum:
  {
    type: Number,
    required: true
  },
  temper:
  {
    type: String,
    required: true
  },
  guardfilm:
  {
    type: String,
    required: true
  },
  thickness:
  {
    type: Number,
    required: true
  },
  width:
  {
    type: Number,
    required: true
  },
  length:
  {
    type: Number,
    required: true
  },
  pcs:
  {
    type: Number,
    required: true
  },
  weight:
  {
    type: Number,
    required: true
  },
  rate:
  {
    type: Number,
    required: true
  },
  products:
  {
    type: String,
    required: true
  },
  gst:
  {
    type: Number,
    required: true
  },
  batch_number:
  {
    type: String,
  
  },



});

const stock_ = mongoose.model("stock_m", stock_m);


module.exports = (stock_); 