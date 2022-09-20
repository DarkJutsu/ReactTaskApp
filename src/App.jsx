import "./App.css";
import { useEffect, useState } from "react";
import { TaskList } from "./components/TaskList";
import { FormTask } from "./components/FormTask";
import { tasks as data } from "./assets/task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length+1,
        title,
        descripcion: `Nueva descripcion`,
      },
    ]);
  };

  return (
    <div className="App">
      <FormTask createTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
