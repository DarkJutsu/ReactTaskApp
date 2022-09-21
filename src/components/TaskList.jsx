import { Task } from "./Task";

export const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) return <h1>No hay Tareas!!!</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
