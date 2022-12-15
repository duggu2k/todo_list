import React from 'react';
import '../components_style/Todostyle.css';


const Todo = ({todo, onDelete}) => {
  return (
    <div className="box" >
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>delete</button>
    </div>
  );
}

export default Todo;
