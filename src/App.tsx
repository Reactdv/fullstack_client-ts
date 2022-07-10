import React from 'react';
import './App.css';
import { Todo } from "./components/todo/Todo"
import { 
         Paper,
         Container
  
} from "@mui/material"



function App() {
  return (
    <Container className="App">
       <Paper>
         <Todo />
       </Paper>
    </Container>
  );
}

export default App;
