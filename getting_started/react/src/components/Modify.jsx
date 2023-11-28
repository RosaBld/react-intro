import { useState } from 'react';

const Modify = ({ todos, setTodos, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(todos[index].task);
  const [editingDate, setEditingDate] = useState(todos[index].date);

  const handleModify = () => {
    if (isEditing) {
      const newTodos = [...todos];
      newTodos[index].task = editingText;
      newTodos[index].date = editingDate;
      setTodos(newTodos);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="editing">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={e => setEditingText(e.target.value)}
          />
          <input
            type="date"
            value={editingDate}
            onChange={e => setEditingDate(e.target.value)}
          />
        </>
      ) : null}
      <button className="Modify" onClick={handleModify}>{isEditing ? 'Save' : 'Modify Task'}</button>
    </div>
  );
};

export default Modify;