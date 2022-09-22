import { useContext, useState } from "react";
import { TaskContext } from "../context/ContextTask";

export const FormTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Titulo de la Tarea"
          value={title}
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <textarea
          cols="30"
          rows="5"
          placeholder="Escribe una descripción para la tarea"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <button className="btn">Agregar Tarea</button>
      </form>
    </div>
  );
};
