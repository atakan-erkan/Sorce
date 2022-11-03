import express from "express"
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();

//connection to the DB
conn(); 

const app = express()
const port = process.env.PORT;

// ejs template engine
app.set("view engine", 'ejs');

// static files middleware
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.render('index');
});

app.get("/index", (req,res)=>{
    res.render('index2');
});

app.get("/login", (req,res)=>{
    res.render('giris');
});

app.listen(port, ()=>{
    console.log(`Application running on port: ${port}`);

});