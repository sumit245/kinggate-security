const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.route("/").get(function (req, res) {
  Product.find(function (err, product) {
    if (err) {
      console.log(err);
    } else {
      res.json(product);
    }
  });
});
///get all Product

router.route("/").post(function (req, res) {
  let product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.status(200).json({ product: "Success" });
    })
    .catch((err) => {
      res.status(400).send("failed");
    });
});

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});
//get specific Product

router.route("/:id").post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product) res.status(404).send("data is not found");
    else
        (product.product_name = req.body.product_name),
        (product.cost = req.body.cost),
        (product.quantity = req.body.quantity),
        product
          .save()
          .then((product) => {
            res.json("Product Update Successfully");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
  });
});
//update a product

router.route("/:id").delete((req, res, next) => {
  Product.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(next(err));
      res.status(200).json({ data: "deleted" });
    } else {
      console.log("deleted_succesfully");
    }
  });
});
//delete a product

module.exports = router;
