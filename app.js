//Import Packages
require("dotenv").config();
const express= require("express");
const bodyParser= require("body-parser");
const ejs= require("ejs");

//Initialize express
const app= express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine' , 'ejs');

// import Route-views
const secretRouter= require('./secret/secret.view.js');


//Router
app.use("/secret", secretRouter);

//Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});


