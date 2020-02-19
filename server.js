var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

app.get("/", function(req, res){
    res.sendFile(__dirname + "/speed.htm");
});

var listener = app.listen(PORT,function(){
    console.log("NodeJS server started (localhost:" + listener.address().port + ")");
});
