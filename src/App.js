import React from 'react';
import logo from './logo.svg';
import './App.css';

// Adding basics hooks 

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")

  function handleSubmit(e) {
   e.preventDefault() 

  //  object created
   const newTodo = {
     id: new Date().getTime(),
     text:todo,
     completed:false,
   }

// updates todo list

setTodos([...todos].concat(newTodo))
setTodo("")

  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>

        {/* Any text written applied to the hook variable */}
        {/* The function will run everytime something is typed in */}
        {/* Value of input is whatever the todo value is */}

          <input type=" text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button type="submit">add Todo</button>
      </form>


      {/* Display todos to the screen */}

    
      {todos.map((todo) => <div>{todo.text}</div>)}
    </div>
  );
}

export default App;
