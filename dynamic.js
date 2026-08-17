const express=require("express")
const app=express();
const PORT=3000;
app.get("/user/:name", (req,res)=>{
    res.send('hello ${req.params.name}');
});
app.get("/user/:name/:age", (req,res)=>{
    res.send("name: ${req.params.name} age:${req.params.age}");
});
app.get("/search", (req,res)=>{
    res.send(`hello ${req.query.name}`);
});
app.listen(PORT, ()=>{
    console.log("server started");
});