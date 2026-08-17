const express= require("express")
const app=express()
const port=1000;
app.get('/',(req,res)=>{
    res.send("hello")
});
app.get("/about",(req,res)=>{
    res.send("This is my home page");
});
app.get("/Route",(req,res)=>{
    res.json({
        Name:"B.jayasri",
        Course:"AIML"
    });
});
app.listen(port,()=>{
    console.log("Server started");
});
