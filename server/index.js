import express from "express";
import Route from './route/Route.js'
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser"

const App=express();

const Port=8001;
App.use(cors());
App.use(bodyParser.json({extended:true}));
App.use(bodyParser.urlencoded({extended:true}));
App.use('/',Route);
Connection();
 App.listen(Port,()=>{console.log(`Server successfully running on Port ${Port}`)});

 