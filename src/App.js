import React from 'react';
import './App.css';
import TodoForm from './components.js/TodoForm';
import TodoList from './components.js/TodoList';

function App() {
  return (
    <div>
      <div className="title">
        <h1>LKMX Front-end</h1>
      </div>
      <div className="todo-app">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
