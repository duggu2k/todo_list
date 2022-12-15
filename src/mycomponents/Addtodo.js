import React,{useState} from 'react';
import '../components_style/Add.css';


const Addnote = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e) =>{
        e.preventDefault()
        if(!title || !desc){
            alert("Title or description can not be empty")
        }else{

          addTodo(title, desc);
          settitle("")
          setdesc("")
        }
    }
    return (
    <div className='ml-5vw monoSpace'>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
      <div  className= "container1 my-3">
        <input className='input1' placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)} type="text" id="title" name="title"/>
        <input className='input1' placeholder="description" value={desc} onChange={(e)=>setdesc(e.target.value)} type="text" id="desc" name="desc"/>
    <button type='submit' className='btn1' id="btn">Add</button>
    </div>
    </form>
    </div>
  );
}

export default Addnote;
