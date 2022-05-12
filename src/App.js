import React from 'react';
import logo from './logo.svg';
import './App.css';

// Adding basics hooks 

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")

  return (
    <div className="App">
      <form>
          <input type=" text" />
            <button type="submit">add Todo</button>
      </form>
    </div>
  );
}

export default App;
