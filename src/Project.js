import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input, List } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/Project.css'
import Todo from "./Todo";


function Project(props) {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      db.collection('projects')
        .doc(props.projectID)
        .collection('todos')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setTodos(snapshot.docs.map((doc) => ({id: doc.id, todo: doc.data().todo})))
        });
    }, [todos]);
    
    const addTodo = (event) => {
      event.preventDefault();
      console.log("Add todo clicked");
      event.preventDefault();
      db.collection("projects").doc(props.projectID).collection("todos").add({
        todo: todo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTodo("");
    };


    return (
      <div className="project">
        {/* Project title */}
        <h3 style={{color: props.color}}>{props.projectTitle}</h3>

        {/* list of todos */}
        <List>
          {/* map todos */}
          {todos.map((todo) => (
            <Todo key={todo.id} value={todo.todo} todoId={todo.id} projectId={props.projectID}/>
          ))}
        </List>

        {/* Todo input */}
        <form className="project__form">
          <FormControl className="project__formControl">
            <InputLabel>Enter todo</InputLabel>
            <Input
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            ></Input>
          </FormControl>
          <Button
            disabled={!todo}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
            className="project__button"
          >
            <ArrowForwardIcon className="project__arrowIcon" />
          </Button>
        </form>
      </div>
    );
}

export default Project
