import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className='todoHeader'>
          <span className='todoTitle'>Todo List</span>
          <TodoList />
        </div>
    );
}
export default App;