import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './css/Project.css'


function Project(props) {
    const [todo, setTodo] = useState('');
    const addTodo = (event) => {
        event.preventDeafult();
    }
    return (
      <div className="project">
        <h3>{props.projectTitle}</h3>
        {/* list of todos */}
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
            <ArrowForwardIcon className="project__arrowIcon"/>
          </Button>
        </form>
      </div>
    );
}

export default Project
