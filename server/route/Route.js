import express from "express";
import { addTask,getTasks,deleteTask} from "../controller/Task_controller.js";

const Router=express.Router();

Router.post('/add',addTask);
Router.get('/get',getTasks);
Router.delete('/delete/:id',deleteTask);
export default Router;