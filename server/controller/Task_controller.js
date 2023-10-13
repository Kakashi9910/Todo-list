import Task from "../model/Task_Model.js";



export const addTask=async(request,response)=>{
    const task=request.body;
    const newTask=new Task(task)
      try{
          await newTask.save();
          response.status(200).json(newTask);
      }
      catch(error){
         response.status(500).json(error.message);
      }
}

export const getTasks=async(request,response)=>{
    try{
      const data=await Task.find();
      response.status(200).json(data);
    }
    catch(error){
        response.status(500).json(error.message);
    }
}
export const deleteTask=async(request,response)=>{
   try{
      await Task.deleteOne({_id:request.params.id});
      response.status(200).json({msg:`${request.params.id} deleted successfully`})
   }
   catch(error){
    response.status(500).json(error.message);
   }
}