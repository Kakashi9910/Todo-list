import { Box, Divider} from "@mui/material"
import { useEffect, useState } from "react";
import { getAllTasks } from "../service/Api";
import styled from "@emotion/styled";
import Tasks from "./Tasks";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../feature/todo/todoSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Container=styled(Box)`
    // border:2px solid black;
    height:60px;
    margin-top:20px;
    `

    const StyleDivider=styled(Divider)`
       margin-left:17px;
       width:90%;
       margin-top:10px;
    `
const AllTask=({setDeleteTask,status})=>{
    const dispatch=useDispatch()
    useEffect(()=>{
       const getAllTasksDetails=async()=>{
            let data=await getAllTasks();
            dispatch(getAllTodos({todos:data}))
       }
       getAllTasksDetails()
    },[status])
    const tasks=useSelector((state)=>state.todos);
    return(
        <Container>
            {
                tasks.map(goal=>(
                    <>
                    <Tasks goal={goal}
                    setDeleteTask={setDeleteTask}/>
                    <StyleDivider />
                    </>
                ))
        
            }
        
      </Container>
        )
}

export default AllTask;