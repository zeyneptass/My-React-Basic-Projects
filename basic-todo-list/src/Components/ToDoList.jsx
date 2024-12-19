import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import '../Css/ToDoList.css'

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const addTodo = () =>{
        if (newTodo.trim() === '') return; {
            setTodos([...todos,{
                id: Date.now(),
                text: newTodo,
                completed:false
            }]);
            setNewTodo('');
        };
    }

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !==id);
        setTodos(updatedTodos);
    };


  return (
    <div className='container'>
      <h2>To-Do List</h2>
        <div>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo((e.target.value))} placeholder='Add New To-Do'/>
            
            <button onClick={addTodo} >Add</button>
        </div>
     <ul>
                {todos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
                ))}
            </ul>
    </div>
  )
}

export default ToDoList
