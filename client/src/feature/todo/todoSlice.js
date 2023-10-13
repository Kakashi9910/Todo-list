import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo", 
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo={
                id:action.payload.description_id,
                description:action.payload.description,
                date:action.payload.date,
                category:action.payload.category
            }
            state.todos.push(todo);
        },
        deleteTodos:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        },
        getAllTodos:(state,action)=>{
            state.todos=action.payload.todos
        }
    }
})

export const {addTodos,deleteTodos,getAllTodos}=todoSlice.actions
export default todoSlice.reducer;