const express = require("express");
const app=express();

app.use("/urunler/:id/users/:userId",function(req,res){
    console.log(req.params.userId);
    console.log(req.params.id);
    console.log(req.params);
    res.send("<h1>Urun Detay Page</h1>");
});

app.use("/urunler",function(req,res){
    res.send("<h1>Urunler Page</h1>");
});
app.use("/",function(req,res){
    res.send("<h1>HomePage</h1>");
});






app.listen(3000,function(){
    console.log("Server is running on port 3000");
});