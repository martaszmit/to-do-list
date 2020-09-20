import React from 'react';
import './styles/app.scss'
import {TodoList} from "./components/todolist/Todolist";

function App() {
  return (
      <div className='app-container'>
        <TodoList/>
      </div>
  );
}

export default App;
