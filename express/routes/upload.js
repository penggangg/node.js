
var express = require('express')
var router = express.Router();
var fs = require('fs')
router.post('/', function(req, res, next) {
    console.log(req.files)
})
module.exports = router;

