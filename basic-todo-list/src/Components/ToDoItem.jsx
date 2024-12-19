import React from 'react'


function ToDoItem(props) {
    const {todo, onDelete} = props;
 return (
    <>
    <li className='todo-item'>
      <div>
        {props.todo.text}
      </div>
      <button onClick={props.onDelete} className='delete-button'>Sil</button>
    </li>
    </>
  )
}

export default ToDoItem
