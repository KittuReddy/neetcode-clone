const express = require('express');
const app = express();

app.use(express.static("frontend"))

app.get("/html",function(req,res){
    res.sendFile(__dirname+"/frontend/SimpleHtml.html")
})

app.get('/', function(req, res){
    res.send("Hello World")
})

app.get('/myName', function(req, res){
    res.send("Krishna");
})

app.listen(3000, function(){
    console.log("running on http://localhost:3000");
})



