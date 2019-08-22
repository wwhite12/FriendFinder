const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);



app.listen(PORT,function(){
    console.log("Listening on PORT: "+PORT);
})