import { Button,styled,Box,InputLabel,Input,FormControl,Select,MenuItem} from "@mui/material"
import { useEffect, useState } from "react"
import { addTask } from "../service/Api"
import { deleteFromDb } from "../service/Api"
import { useDispatch } from "react-redux"
import { addTodos } from "../feature/todo/todoSlice"
import { deleteTodos } from "../feature/todo/todoSlice"
const SubContainer=styled(FormControl)`
    margin-left:20px;
    width:300px;
    height:100px
`
const Wrapper=styled(Box)`
  margin-top:30px
`
const DueDate=styled(Box)`
margin-left:20px;
border:2px solid black;
`
const Container=styled(Box)`
    border:2px solid black;
    width:500px;
    padding:0px;
    display:flex;
    flex-direction:column;
    height:300px;
    justify-content:center;

`
const ParentContainer=styled(Box)`
   width:100%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   height:450px;
   align-items:center;
`
const Buttons=styled(Box)`
   margin-top:20px;
   & > *{
    margin:15px;
   }
`
const defaultTask={
    description:"",
    category:"",
     date:""
}
const FillForm=({deleteTask,status,setStatus,setDeleteTask})=>{
  
  const [flag,setFlag]=useState(false);
  // useEffect(()=>{
      
  // },[flag])
    const [tasks,setTasks]=useState(defaultTask);
    const storeEvent=(e)=>{
        setTasks({...tasks,[e.target.name]:e.target.value});
        setFlag(!flag);
    }
   const addTaskDetail=async(data)=>{
        
        await addTask(data);
        
        setTasks(defaultTask);
        setStatus(!status);
        
        // window.location.reload(true)
   }
   const deleteIt=async(deleteTask)=>{
        await deleteFromDb(deleteTask);
        
        setDeleteTask([]);
        setStatus(!status);
   }
    return(
        <ParentContainer style={{border:"2px solid black"}}>
        <Container>
           <SubContainer>
              <InputLabel>Description</InputLabel>
              <Input value={tasks.description} name="description" onChange={(e)=>storeEvent(e)} type="text"/>
           </SubContainer>
            <Wrapper>
                <SubContainer>
                    <InputLabel>Category</InputLabel>
                    <Select value={tasks.category} name="category" onChange={(e)=>storeEvent(e)} placeholder="Choose a category">
      <MenuItem value="Personal">Personal</MenuItem>
      <MenuItem value="Work">Work</MenuItem>
      <MenuItem value="School">School</MenuItem>
      <MenuItem value="Cleaning">Cleaning</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
                </SubContainer>
                <DueDate style={{display:"inline-block"}}>
                    <InputLabel style={{marginTop:0}}for="datemax">Due Date</InputLabel>
                    <Input value={tasks.date} onChange={(e)=>storeEvent(e)} name="date" id="datemax"type="date"/>
                </DueDate>
            </Wrapper>
        </Container>
        <Buttons>
          <Button variant="contained" onClick={()=>addTaskDetail(tasks)}>
            Add Task
          </Button>
          <Button onClick={()=>deleteIt(deleteTask)} variant="contained" color="secondary">
            Delete Task
          </Button>

        </Buttons>
        </ParentContainer>
    )
}

export default FillForm;