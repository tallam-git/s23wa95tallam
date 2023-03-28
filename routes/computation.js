var express = require("express");
var router = express.Router();
const url = require("url");
const querystring = require("querystring");

router.get("/", function (req, res, next) {
  console.log(req.url);
  link = url.parse(req.url);
  console.log(link.query);
  searchParam = new URLSearchParams(link.query);
  console.log(random);
  if (searchParam.get("x")) {
    res.send(`Math.cos() applied to ${searchParam.get("x")} is ${Math.cos(
      searchParam.get("x")
    )}
        <br> Math.atan() applied to ${searchParam.get("x")} is ${Math.atan(
      searchParam.get("x")
    )}
        <br> Math.asinh() applied to ${searchParam.get("x")} is ${Math.asinh(
      searchParam.get("x")
    )}
        `);
  } else {
    var random = Math.floor(Math.random() * 360);
    res.send(`Math.cos() applied to ${random} is ${Math.cos(random)}
    <br> Math.atan() applied to ${random} is ${Math.atan(random)}
    <br> Math.asinh() applied to ${random} is ${Math.asinh(random)}
    `);
  }
});

module.exports = router;