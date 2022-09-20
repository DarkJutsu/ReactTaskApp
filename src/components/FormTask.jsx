import { useState } from "react";

export const FormTask = ({createTask}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo de la Tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Agregar Tarea</button>
      </form>
    </div>
  );
};
