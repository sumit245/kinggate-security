const mongoose = require("mongoose");
require("dotenv").config();
const connection = process.env.MONGODB_URL;
mongoose
  .connect(
    connection || "mongodb+srv://root:1234@cluster0.c5p42.mongodb.net/kingsgate?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
  // mongoose.connect('mongodb://127.0.0.1:27017/khatabook', { useNewUrlParser: true });
  // const connection = mongoose.connection;
  
  // connection.once('open', function() {
  //     console.log("MongoDB database connection established successfully");
  // })