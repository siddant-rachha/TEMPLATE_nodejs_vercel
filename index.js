const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors")
dotenv.config();
const app = express();
app.use(cors());
const jsonParser = bodyParser.json();
app.use(jsonParser)



app.get("/",(req,res)=>{
    res.send("server is returning get request")
})

app.get("*",(req,res)=>{
    res.send("404 request")
})

//server listen
app.listen( process.env.PORT || 5000, ()=>{
    console.log("server is running on 5000")
})
