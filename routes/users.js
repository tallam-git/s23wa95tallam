var express = require('express');
var router = express.Router();

/* GET users listing. */
var sum=0;
var more=0;

router.get('/', function(req, res, next) {
  more = more + 1;
  sum = sum + more;
  res.send(`Sum is ${sum}`);
});

module.exports = router;
