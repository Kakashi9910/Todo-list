import { Box,FormControlLabel,Checkbox, Typography, Divider, styled} from "@mui/material"
import {CalendarMonth} from '@mui/icons-material';



const Container=styled(Box)`
    display:flex;
    // border:2px solid black;
    width:90%;
`
const Wrapper=styled(Box)`
    // border:2px solid black;
    margin-left:25px;
    width:40%;
    height:20px;
    & > *{
        color:grey;
        font-size:13px;
        margin-left:10px;
    }
    `
const Category=styled(Box)`
    padding-top:5px;
    background:red;
    width:8%;
    height:30px;
    text-align:center;
    margin:auto 10px auto auto;
    border-radius:12px;
    border:2px solid black;
`
    const taskList=[];
const Tasks = ({goal,setDeleteTask}) => {
    
     const toggleChange=async(e)=>{
        console.log(e);

        if(e.target.checked && !taskList.includes(goal._id)){
              taskList.push(goal._id);
              
        }
        if(!e.target.checked && taskList.includes(goal._id)){
            let index=taskList.indexOf(goal._id);
            taskList.splice(index, 1);
        }
        e.target.checked=false;
        setDeleteTask(taskList);
     }
     
    return (
        <Container>
            <Box style={{width:'20%'}}>
            <FormControlLabel style={{ height: 30, marginLeft: 15}} control={<Checkbox onChange={(e)=>toggleChange(e)}/>} label={goal.description} />
            <Wrapper>
                <CalendarMonth />
                <Typography style={{ display: "inline-block" }}>{goal.date}</Typography>
            </Wrapper>
            </Box>
            <Category>
                {goal.category}
            </Category>
        </Container>
    )
}

export default Tasks;