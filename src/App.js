import { useEffect } from 'react';
import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const defaultTodo = JSON.parse(localStorage.getItem('toDoList'));
  // console.log('defaultTodo', defaultTodo)

  const [todos, setTodos] = useState(defaultTodo || []);

  // console.log('todos', todos)

  const addTask = (userInput) => {

    // console.log('userInput', userInput)
 
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        complete: false
      }
      // console.log('newItem', newItem)

      setTodos([  ...todos, newItem ] )
      // console.log('JSON', JSON.stringify([  ...todos, newItem ]))

      // console.log('newItem2', newItem)
      
      localStorage.setItem('toDoList', JSON.stringify([  ...todos, newItem ]))
    }
  }

  
    
  

  const removeTask = (id) => {
    
    // console.log('newArray', newArray)

    setTodos([...newArray.filter((todo) => todo.id !== id)])
    
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? { ...todo, complete: !todo.complete} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1 className='header'>TODO LIST: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
          todo={todo} 
          key={todo.id}
          toggleTask={handleToggle}
          removeTask={removeTask}
          />
        )
      })}
    </div>
  );
}

export default App;
