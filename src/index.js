import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();

app.use(bodyParser.json());
app.use("/",router);


mongoose.connect("mongodb+srv://dbuser:S%40ndy19891@cluster0.dl1os.mongodb.net/Customer-Management").then(()=>console.log("mongodb connected....")).catch(err=> console.log(err))
app.listen(3000,()=>console.log("express running on 4000..."));
