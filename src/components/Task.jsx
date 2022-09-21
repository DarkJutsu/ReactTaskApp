import { AiOutlineCloseCircle } from "react-icons/ai";

export const Task = ({ task, deleteTask }) => {
  const viewAlert = () => {
    alert(task.id);
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
      <button onClick={()=>deleteTask(task.id)}>
        <AiOutlineCloseCircle style={{ fontSize: 30 }} />
      </button>
    </div>
  );
};
