export const FormTask = () => {
  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="Titulo de la Tarea"
          onChange={(e)=>{
            console.log(e.target.value)
          }}
        />
        <button>Agregar Tarea</button>
      </form>
    </div>
  );
};
