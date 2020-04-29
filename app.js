const express = require("express");
const path = require('path');
var dns = require('dns');
const bodyParser = require("body-parser");



const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.set('view engine','ejs');

app.get("/",(req,res)=>{
    res.render('url')
})


app.listen(3000,()=>{
    console.log("server on port 3000");
})