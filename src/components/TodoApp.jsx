import React, { useState } from 'react';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const TodoApp = () => {
  //initializing the variables
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  //function for change of title
  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  //function for change of components
  const handleDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  };

  //for adding the todo in the UI
  const handleAddTodo = () => {
    if (inputTitle.trim() !== '' && inputDescription.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: inputTitle, description: inputDescription, completed: false }]);
      setInputTitle('');
      setInputDescription('');
    }
  };

  //checking whether all the todos are present or not
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //function for deleting todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style = {{
      backgroundColor: "#ffffa0"
    }}>
      <div style={{
        display: "flex",
        width: 1000,
        marginLeft: 500,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#ffe9c4"
      }} >

        <div >
          <TextField id="standard-basic" label="Title" variant="standard" onChange={handleTitleChange} value={inputTitle} />
          <br />
          <TextField id="standard-basic" label="Description" variant="standard" onChange={handleDescriptionChange} value={inputDescription} />
          <br />
          <br />
          <Button onClick = {handleAddTodo}  variant="contained" color = "error"> Add Todo</Button>
        </div>
        </div>
        <div style={{
         display: "flex",
         width: 1000,
         marginLeft: 500,
         justifyContent: "center",
         alignContent: "center",
         backgroundColor: "#dcffff"
        }}>
          <ul >
            {todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />

                <div>
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <Button onClick={() => handleDeleteTodo(todo.id)}  variant="contained" color = "success"> Delete</Button>
              </li> 
            ))}
          </ul>
        </div>
    </div>
  );
};

export default TodoApp;
