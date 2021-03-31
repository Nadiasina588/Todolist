import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className='App'>
    <header>
    <h1>Hello React</h1>
    </header>
  <Form 
  inputText = {inputText}
  todos={todos} 
  setTodos={setTodos} 
  setInputText= {setInputText} />
  <TodoList />
    </div>
  );
}
export default App;


import React,{useState} from "react";
import "./App.css";
import "./index.css";
import Hello from "./sayHello";
function App() {
 const [users, setUsers] = useState([
   {name:"Ed", message: "Hello there"},
   {name: "Nadiasina", message: "I am Nadiasina"},
   {name: "transvery", message: "I am awesome"}
 ]);

  return (
    <div className="app">
   {users.map(user => (
     <Hello name={user.name} message={user.message} />
   ))}
      
    </div>
  );
}
export default App;