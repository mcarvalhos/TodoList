import React from 'react'
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <button className="button">Apagar todos</button>
      <button className="button">Apagar Completos</button>
    </div>
  );
}

export default App;
