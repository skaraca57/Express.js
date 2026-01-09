const express = require("express");

const app= express();

app.use(function(req,res){
    res.end("HomePage SK");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});