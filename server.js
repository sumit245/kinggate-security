const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("./database/database");
const challan = require('./api/challan')
const payments = require("./api/payments")
const products = require("./api/products")
const users = require("./api/users");
const bills = require("./api/bills")
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/challan", challan)
app.use("/api/payments", payments)
app.use("/api/products", products)
app.use("/api/users", users);
app.use("/api/bills", bills)

app.use(express.static(path.join(__dirname, './build')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './build'))
})
app.use(express.static(path.join(__dirname, './build')))
app.get("*", (req, res) => {
  let url = path.join(__dirname, './build', 'index.html');
  // if (!url.startsWith('/app/')) // since we're on local windows
    // url = url.substring(1);
  res.sendFile(url);
// });
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, "./build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./build"));
  });
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

