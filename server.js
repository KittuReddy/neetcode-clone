const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
const express = require('express');
const app = express();

const courseLib=require('./backend/lib/courseLib');


app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/SimpleHtml.html")
})

mongoose.set('strictQuery',true);

mongoose.connect(process.env.MONGO_CONNECTION_STRING,async function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("DataBase Connection Successful");
        await courseLib.createFirstCourse();
        const courses=await courseLib.getAllCourses();
        console.log(courses);
        app.listen(3000, function(){
            console.log("running on http://localhost:3000");
        })
    }
})

// app.listen(3000, function(){
//     console.log("running on http://localhost:3000");
// })



