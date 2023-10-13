import mongoose from "mongoose";


const Connection=async()=>{
    const url=`mongodb://Palash:Goku@ac-vylas2z-shard-00-00.lxrdf28.mongodb.net:27017,ac-vylas2z-shard-00-01.lxrdf28.mongodb.net:27017,ac-vylas2z-shard-00-02.lxrdf28.mongodb.net:27017/?ssl=true&replicaSet=atlas-ho6lod-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true })
        console.log("database connected successfully");
    }
    catch(error){
      console.log("error in connecting to database",error.message);
    }
}

export default Connection;