const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;




app.listen(PORT,function(){
    console.log("Listening on PORT: "+PORT);
})