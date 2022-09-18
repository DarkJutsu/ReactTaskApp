import { useEffect, useState } from "react";
import { tasks as data } from "../assets/task";

console.log(data);

export const TaskList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  }, [])

  if(tasks.length===0) return <h1>No hay Tareas!!!</h1>

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.descripcion}</p>
        </div>
      ))}
    </div>
  );
};
