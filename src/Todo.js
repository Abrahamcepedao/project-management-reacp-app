import React from 'react';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import './css/Todo.css';
import { db } from './firebase';

function Todo(props) {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const deleteTodo = () => {
      db.collection("projects").doc(props.projectId).collection("todos").doc(props.todoId).delete();
    };

    return (
      <ListItem onClick={handleToggle(props.value)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(props.value) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={props.value} />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={deleteTodo}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
}

export default Todo;
