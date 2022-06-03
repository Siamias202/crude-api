
//rF3iH815IidPKdqj

const express=require("express");

const mongoose = require("mongoose");
const router=require("./routes/book-routes");
const cors=require("cors");
const app=express();
//middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)//local host:5000/books





mongoose.connect
("mongodb+srv://admin:rF3iH815IidPKdqj@cluster0.agxzg.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("Connected to database"))
 .then(()=>{
     app.listen(5000);
 }).catch((err)=>console.log(err));



