const path = require("path");
const router = require('express').Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json());

router.get("", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/template/main.html'))
})

router.use("/static", require("express").static(path.join(__dirname, '../public/static')));

router.use("/module-data", require("express").static(path.join(__dirname, '../modules')));

module.exports = router;