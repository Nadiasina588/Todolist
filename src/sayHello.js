import React from 'react';
import "./App.css";

function Hello ({name, message}){
    return(
        <div className="hello">
        <h1>{name}</h1>
        <p>{message}</p>
        <h1>Number of likes</h1>
        </div>
        
    );
   
}
export default Hello;