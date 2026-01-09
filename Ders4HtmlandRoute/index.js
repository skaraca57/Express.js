const express = require("express");
const app= express();
const path=require("path");
const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

app.use("/libs",express.static("../node_modules"));


app.use("/admin",adminRoutes);
app.use(userRoutes);


app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

