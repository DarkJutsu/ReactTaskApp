export const Task = ({ task }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
    </div>
  );
};
