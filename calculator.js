const { response } = require( "express" );
const express = require("express");
const { get } = require( "http" );
const app = express();

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
    console.log("server running on port 3000");
});