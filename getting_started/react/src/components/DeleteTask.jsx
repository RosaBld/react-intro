const DeleteTask = ({ setTodos }) => {
    const handleDelete = () => {
      setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
    };
  
    return <button onClick={handleDelete}>Delete Completed Task</button>;
  };
  
export default DeleteTask;