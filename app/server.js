var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/speed.htm");
});

var listener = app.listen(3000,function(){
    console.log("NodeJS server started (localhost:" + listener.address().port + ")");
});
