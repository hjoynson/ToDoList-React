import React from 'react';
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

  // Filter = true value boolean it will include element in Array, false value wont be returned
function deleteToDo(id) {
const updatedTodos = [...todos].filter((todo) => todo.id !== id)

setTodos(updatedTodos)
}


function toggleComplete(id) {
  const updatedTodos = [...todos].map((todo)) ; {
    if (todo.id == id) {
      todo.completed = !todo.completed
    }
    return todo
  }

setTodos(updated)
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

      {todos.map((todo) => <div key={todo.id}>
        <div>{todo.text}</div>

        {/* Delete to do  */}

        <button onClick={() => deleteToDo(todo.id)}>Delete</button>

        <input type="checkbox" onChange={() => toggleComplet(todo.id)}/>

    </div>)}
    </div>
  );
}

export default App;
