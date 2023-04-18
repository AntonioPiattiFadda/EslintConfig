import React, { useState, useEffect } from 'react';
import sarassa from './saras';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target['name'].value;
    const newTodos = [...todos];
    newTodos.push(newTodo);
    if (!newTodo) return;
    setTodos(newTodos);
    e.target.name.value = '';
    console.log(todos);
  };

  return (
    <>
      <div className="layout">
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            <input name="name" type="text" />
            <button type="submit">Add Todo</button>
          </form>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={todo}>
                  {todo} <button onClick={() => handleDelete(index)}>x</button>{' '}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
