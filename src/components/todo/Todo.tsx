import React, { FC,useState,ChangeEvent } from "react"
import { ITask } from "./Interfaces"
import { Button,
         TextField,
         Container,
         Paper
} from "@mui/material"
import { styles } from "./styles"
import { TodoList } from "./todoList/TodoList" 





export const Todo:FC =()=>{
  const [task,setTask] = 
  useState<string>("")
  const [deadline,setDeadline] = 
  useState<number>(0)
  const [todoList,setTodoList] = 
  useState<ITask[]>([])
  
  const handleTask =
  (e:ChangeEvent<HTMLInputElement>)=>{
    setTask(e.target.value)
  }
  
  const handleDeadline =
  (e:ChangeEvent<HTMLInputElement>)=>{
    setDeadline(Number(e.target.value))
  }
  
  const handleSubmit =(event:any)=>{
   const newTask = {taskName:task, deadline:deadline}  
   event.preventDefault() 
  setTodoList([...todoList,newTask])
  
  }
 
 const deleteTask =
 (taskToDelete:string):void =>{
   setTodoList(todoList.filter((todo)=>{
     return todo.taskName !== taskToDelete
   }))
 }
 
  
  return (
  <Container sx={styles.form}>  
   <form
   onSubmit={handleSubmit}
   noValidate
   autoComplete="false">
     <TextField 
       label="Task"
       margin="dense"
       variant="outlined"
       onChange={handleTask}
     />
     <TextField 
       label="Deadline"
       margin="dense"
       variant="outlined"
       onChange={handleDeadline}
       type="number"
     />
     <Button 
      type="submit"
      variant="contained"
     
     >
       Add task
     </Button>
   </form>
   <div>
     {todoList.map((todos:ITask ,key:number)=>(
       <Paper 
       
       sx={{mt:"10px",px:"5px"}}>
          <TodoList 
            key={key}
            todos={todos}
            deleteTask={deleteTask}
          />
       </Paper>
     ))}
   </div>
  </Container>
   )
}