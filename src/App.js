import React, { useState, useEffect } from "react";
import Nav from './Nav';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //use effect
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocationTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
        case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocationTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
 return (
  
   <div className='App'>
   <Nav />
   <header>
     <h1>Nadiasina Todo List</h1>
   </header>
   <Form 
   inputText={inputText}
   todos={todos}
   setTodos={setTodos}
   setInputText={setInputText} 
   setStatus={setStatus}
   
   />
   <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
   </div>
 );
}
export default App;