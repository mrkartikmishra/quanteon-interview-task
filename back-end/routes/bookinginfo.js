const express = require("express");
const fs = require("fs");
const lodash = require("lodash");
const router = express.Router();

const filePath = "data/data.json";

router.get("/", (req, res) => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

router.post("/details", (req, res) => {
  var confirmationNo = req.body.confirmationNo;
  var lastName = req.body.lastName;
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    let result = lodash.find(jsonData, obj => {
      return obj.confirmationNo == confirmationNo && obj.lastName == lastName;
    });
    if (result) {
      res.json({
        status: 200,
        msg: "success",
        data: result
      });
    } else {
      res.json({
        status: 404,
        msg: "failure",
        data: []
      });
    }
  });
});

router.post("/checkin", (req, res) => {
  var confirmationNo = req.body.confirmationNo;
  var pid = req.body.pid;

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    let result = lodash.find(jsonData, obj => {
      return obj.confirmationNo == confirmationNo;
    });
    if (result) {
      let pResult = lodash.find(result.passengers, obj => {
        return obj.pid == pid;
      });
      if (pResult) {
        if (pResult.checkedIn === true) {
          res.json({
            status: 200,
            msg: "already checkedin",
            data: pResult
          });
        } else {
          pResult["checkedIn"] = true;
          for (var i = 0; i < result.passengers.length; i++) {
            if (result.passengers[i].pid == pid) {
              result.passengers[i] = pResult;
            }
          }
          fs.writeFile(filePath, JSON.stringify(jsonData), (err, data) => {
            if (err) throw err;
            res.json({
              status: 200,
              msg: "checkedin successfull",
              data: pResult
            });
          });
        }
      }
    } else {
      res.json({
        status: 400,
        msg: "Bad Request",
        data: []
      });
    }
  });
});

module.exports = router;
