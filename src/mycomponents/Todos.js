import React from 'react';
import Todo from './Todo';
import '../components_style/Add.css';


const Todos = (props) => {
  
  // let todosstyle = {
  //   display: "flex",
  //   minHeight:"100px",
  //   flexDirection:"column",
  //   justifyContent:"center"
  // }
  return (
    <div className=' ml-5vw' >
      <h2 className='my-3 monoSpace'>Todos List</h2>
      <div className='container1  monoSpace'>
      {props.todos.length===0? <h3>No todos to display</h3> :
      props.todos.map((todo) =>{
        return <Todo key={todo.Sno} todo={todo} onDelete = {props.onDelete}/>
      })
      }
      </div>
    </div>
  );
}


export default Todos;