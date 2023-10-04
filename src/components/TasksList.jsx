import { useState } from "react";
import {tasks as tasksData} from '../data/tasks';

export function TasksList(){
    const [tasks, setTasks] = useState(tasksData);

    const handleToggleTask = index => {

        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
       setTasks(newTasks); 


    };


    const handleDeleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };

    const handleAddddTask = (title) => {
        const newTasks = [...tasks];
        newTasks.push({
            title: title,
            description: "",
            completed: false
        });
        setTasks(newTasks);
    };



    return(
    <>
        <button onClick={() => handleAddddTask("Add new task")}>+</button>
        {tasks.lenght === 0? <div>Empty list</div> : 
        
        <ul>
        
        {tasks.map(({title, completed }, index) => (
       
            <li key={index} style={{
                textDecoration: completed? 'line-through' : 'none'
            }}>{title}
            <button onClick={() => handleToggleTask(index)}>{completed ? 'Undo' : 'Complete'} </button>
            <button onClick={() => handleDeleteTask(index)}>Delete </button>
            </li>
           
     ))}
    
    </ul>
        }
    </>
    );




}