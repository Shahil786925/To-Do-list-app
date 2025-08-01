import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
