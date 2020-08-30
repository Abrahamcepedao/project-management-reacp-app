import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import firebase from "firebase";
import { Button, FormControl, List, TextField } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import './css/Project.css'
import Todo from "./Todo";
import { withStyles } from '@material-ui/core/styles';


const MyTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    
  }
})(TextField);



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

    const deleteProject = () => {
        db.collection("projects").doc(props.projectID).delete();
    }


    return (
      <div className="project">
        {/* Project title */}
        <div className="project__header">
          <h3 className="project__title" style={{ color: props.color }}>{props.projectTitle}</h3>
          <IconButton edge="end" onClick={deleteProject}>
            <DeleteIcon />
          </IconButton>
        </div>
        

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
            <MyTextField id="custom-css-standard-input" label="Type todo" defaultValue={todo} onChange={(event) => setTodo(event.target.value)}/>
            {/* <InputLabel>Enter todo</InputLabel> */}
            {/* <TextField id="standard-basic" label="Enter todo" value={todo} onChange={(event) => setTodo(event.target.value)}/> */}
            {/* <Input
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            ></Input> */}
          </FormControl>
          <Button
            disabled={!todo}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addTodo}
            className="project__button"
            style={{
              backgroundColor: props.color,
            }}
          >
            <ArrowForwardIcon className="project__arrowIcon" />
          </Button>
        </form>
      </div>
    );
}

export default Project
