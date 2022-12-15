import "./App.css";
import Header from "./mycomponents/Header";
import Footer from "./mycomponents/Footer";
import Todos from "./mycomponents/Todos";
import About from "./mycomponents/About";
import React, { useState, useEffect } from "react";
import Addtodo from "./mycomponents/Addtodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = "";
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("hello i am on delete", todo);
    // this will not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log(title, desc);
    let Sno;
    if (todos.length === 0) {
      Sno = 0;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const myTodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    };

    settodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    return localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/" 
            element={
                <>
                  <Addtodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
