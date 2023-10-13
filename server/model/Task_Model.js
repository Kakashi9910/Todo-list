import mongoose from "mongoose";


const TaskSchema=new mongoose.Schema({
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    date:{
        type:String,
    }
})


const task=mongoose.model('task',TaskSchema);
export default task;



