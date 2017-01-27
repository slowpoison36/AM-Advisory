var express = require("express");

var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));


//home page
app.get("/",function(req,res){
    res.render("home");
});
//Contact Route
app.get("/contact",function(req,res){
    res.render("contact");
})

//Service Route
app.get("/service",function(req,res){
    res.render("service");
})



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server up and running");
})