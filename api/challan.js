const express = require("express");
const router = express.Router();
const Challan = require('../models/challan.model')

router.route("/").get(function (req, res) {
  Challan.find(function (err, challan) {
    if (err) {
      console.log(err);
    } else {
      res.json(challan);
    }
  });
});

///get all challan
router.route("/mobile").get(function (req, res) {
  const mobile_number = req.query.mobile_number
  var condition = mobile_number ? { mobile_number: { $regex: new RegExp(mobile_number), $options: "i" } } : {}
  Challan.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

router.route("/").post(function (req, res) {
  let challan = new Challan(req.body);
  challan
    .save()
    .then((challan) => {
      res.status(200).json({ challan: "Success" });
    })
    .catch((err) => {
      res.status(400).send("failed");
    });
});
//save a challan

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Challan.findById(id, function (err, challan) {
    res.json(challan);
  });
});
//get specific challan

router.route("/:id").post(function (req, res) {
  Challan.findById(req.params.id, function (err, challan) {
    if (!challan) res.status(404).send("data is not found");
    else
      (challan.challan_num = req.body.challan_num),
        (challan.challan_date = req.body.challan_date),
        (challan.client_name = req.body.client_name),
        (challan.mobile_number = req.body.mobile_number),
        (challan.company = req.body.company),
        (challan.address = req.body.address),
        (challan.item_name = req.body.item_name),
        (challan.item_cost = req.body.item_cost),
        (challan.item_disc = req.body.item_disc),
        (challan.item_price = req.body.item_price),
        (challan.sub_total = req.body.sub_total),
        (challan.grand_disc = req.body.grand_disc),
        (challan.grand_total = req.body.grand_total),
        (challan.balance = req.body.balance),
        challan
          .save()
          .then((challan) => {
            res.json("Client Update Successfully");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
  });
});
//update a challan

router.route("/:id").delete((req, res, next) => {
  Challan.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(next(err));
      res.status(200).json({ data: "deleted" });
    } else {
      console.log("deleted_succesfully");
    }
  });
});
//delete a challan

module.exports = router;
