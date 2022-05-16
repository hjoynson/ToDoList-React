import React from 'react';
import './App.css';

// Adding basics hooks 

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  const [todoEditing, setTodoEditing] = React.useState(null)
  const [editingText, setEditingText] = React.useState("")



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
  let updatedTodos = [...todos]
  updatedTodos[id].completed = !updatedTodos[id].completed;



setTodos(updatedTodos)
}

// Todos saved and mapped over
function editTodo(id){
  const updatedTodos = [...todos].map((todo) => {
    if(todo.id == id){
      todo.text = editingText
    }
    return todo
  })

  // re-set editing logic
  setTodos(updatedTodos)
  setTodoEditing(null)
  setEditingText("")
}


  return (
    <div className="App">

      <form onSubmit={handleSubmit}>

        {/* Any text written applied to the hook variable */}
        {/* The function will run everytime something is typed in */}
        {/* Value of input is whatever the todo value is */}

          <input type=" text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
            <button type="submit">ADD TO-DO</button>
      </form>


      {/* Display todos to the screen */}

      {todos.map((todo,index) => <div key={todo.id}>

        {/* Conditional Rendering */}

      {todoEditing == todo.id && 
      (<input
        type="text" 
        onChange={(e) => setEditingText(e.target.value)}
      
      />)
      
      }

      <div>{todo.text}</div>


          {/* <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}/> */}

        {/* Delete to do  */}

        <button onClick={() => deleteToDo(todo.id)}>DELETE</button>

        <input type="checkbox" onChange={() => toggleComplete(index)}
        checked={todo.completed}/>

        {/* Editing to do functionality Buttons */}

        {todoEditing == todo.id ? (<button onClick={() => editTodo(todo.id)}
        >Submit Edits</button>) : (
        <button onClick={() => setTodoEditing(todo.id)}
        >EDIT TO-DO</button>)}

    </div>)}
    </div>
  );
}

export default App;
