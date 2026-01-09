const express = require("express");
const router = express.Router();
const path = require("path");

router.use("/blogs/:blogid",function(req,res){
    res.sendFile(path.join(__dirname,"../users","blog-details.html"));
});

router.use("/blogs",function(req,res){
    res.sendFile(path.join(__dirname,"../users","blogs.html"));
});

router.use("/",function(req,res){
    res.sendFile(path.join(__dirname,"../users","index.html"));
});

module.exports = router;