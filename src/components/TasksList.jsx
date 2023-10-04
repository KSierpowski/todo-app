import { useState } from "react";
import {tasks as tasksData} from '../data/tasks';

export function TasksList(){

    const [tasks, setTasks] = useState(tasksData);

    const handleDeleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
    return(
        <ul>

        {tasks.map((task, index)=>{
          return(
          <>
      
            <li key={index}>{task.title}</li>
            <button onClick={() => handleDeleteTask(index)}>X</button>
      
          </>);
           
     })}
    
    </ul>
    )




}