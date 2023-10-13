import axios from "axios";




const url='http://localhost:8001';
export const addTask=async(data)=>{
    
    try{
          await axios.post(`${url}/add`,data);
    }
    catch(error){
        console.log("Error in addTask",error.message);
    }
}

export const getAllTasks=async()=>{
    
    try{
        
        const response=await axios.get(`${url}/get`);
        return response.data;
    }
    catch(error){
          console.log("Error in getting tasks",error.message);
    }
}

export const deleteFromDb=async(data)=>{
    try{
    await data.map(async(element)=>{
           await axios.delete(`${url}/delete/${element}`) 
    })
}
 catch(error){
    console.log("Error in deleting tasks",error.message);
 }   
}