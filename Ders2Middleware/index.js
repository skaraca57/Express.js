const express = require("express");
const app= express();

app.use(function(req,res,next){ 
    console.log("Middleware 1 çalıştı");
    next();
});

app.use(function(req,res,next){ 
    console.log("Middleware 2 çalıştı");    
    next();
});

app.use(function(req,res,next){ 
    console.log("Middleware 3 çalıştı");
    res.send(`<h1>HomePage</h1>`);
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
