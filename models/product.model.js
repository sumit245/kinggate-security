const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Product = new Schema({
  product_num: {
    type: String,
  },
  product_name:{
      type:String
  },
  product_type:{
    type:String
  },
  hsn_code:{
    type:String
  },
  model_num:{
    type:String
  },
  quantity: {
    type: String,
  },
  cost: {
    type: String,
  },
  remarks:{
    type:String
  }
});

module.exports = mongoose.model("Product", Product);
