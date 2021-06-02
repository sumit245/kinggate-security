const express = require("express");
const router = express.Router();
const Bill = require("../models/bills.model");

router.route("/").get(function (req, res) {
  Bill.find(function (err, bill) {
    if (err) {
      console.log(err);
    } else {
      res.json(bill);
    }
  });
});

router.route("/mobile").get(function (req, res) {
  const mobile_number=req.query.mobile_number
  var condition=mobile_number?{mobile_number:{ $regex: new RegExp(mobile_number), $options: "i" }}:{}
  Bill.find(condition)
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

///get all Bill

router.route("/").post(function (req, res) {
  let bill = new Bill(req.body);
  bill.item.push();
  bill
    .save()
    .then((bill) => {
      res.status(200).json({ bill: "Success" });
    })
    .catch((err) => {
      res.status(400).send("failed");
    });
});
//save a Bill

router.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Bill.findById(id, function (err, Bill) {
    res.json(Bill);
  });
});
//get specific Bill

router.route("/:id").post(function (req, res) {
  Bill.findById(req.params.id, function (err, bill) {
    if (!bill) res.status(404).send("data is not found");
    else
      (bill.bill_num = req.body.bill_num),
        (bill.bill_date = req.body.cbill_date),
        (bill.supplier = req.body.supplier),
        (bill.mobile_number = req.body.mobile_number),
        (bill.company = req.body.company),
        (bill.address = req.body.address),
        bill.item.push(req.body.item),
        bill
          .save()
          .then((bill) => {
            res.json("Client Update Successfully");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
          });
  });
});
//update a bill

router.route("/:id").delete((req, res, next) => {
  Bill.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(next(err));
      res.status(200).json({ data: "deleted" });
    } else {
      console.log("deleted_succesfully");
    }
  });
});
//delete a bill

router.route("/").delete((req, res, next) => {
  Bill.deleteMany({id:req.body.deletearr})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
      });
    });
});

module.exports = router;
