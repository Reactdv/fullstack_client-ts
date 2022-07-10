import { Box,Checkbox,Button } from "@mui/material"
import { ITask } from "../Interfaces"
import DeleteIcon from '@mui/icons-material/Delete';
import { styles } from '../styles';

interface Props{
  todos:ITask,
  deleteTask(taskToDelete:string):void
 
}


export const TodoList =({todos,deleteTask}:Props)=>{
 return (  
  <Box sx={styles.todoListContainer}>
    <Checkbox
   
    color="success"
   
     />
    <div>
       <div>
       {todos.taskName}
       </div>
       <div>
       {todos.deadline}
       </div> 
    </div>
    <Button 
     onClick=
     {()=> deleteTask(todos.taskName)}
     >
    <DeleteIcon color="error" />
    </Button>
  </Box>
 ) 
}