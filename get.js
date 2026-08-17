const express=require('express');
const app=express()
const PORT=2000;
app.get('/user',(req,res)=>{
    res.json({
        name: "Jayasri",
        course: "AIML",
        semester: 3
    });
});
app.listen(PORT, ()=>{
    console.log("Serveris running sucessfully");

});