import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  if (todos.length === 0) return <p>No tasks yet!</p>;
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
