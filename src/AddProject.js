import React, { useState } from 'react';
import { db } from "./firebase";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input, TextField } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import './css/AddProject.css'

const MyTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },

  }
})(TextField);

function AddProject() {
    const [project, setProject] = useState('');

    const addProject = (event) => {
        event.preventDefault();
        db.collection('projects').add({
            project: project,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setProject('');
    };

    return (
      <div>
        <form className="addProject__form">
          <FormControl className="addProject__formControl">
            <MyTextField id="custom-css-standard-input" label="Type project" value={project} onChange={(event) => setProject(event.target.value)} />
            {/* <InputLabel>Enter project</InputLabel>
            <Input
                value={project}
                onChange={event => setProject(event.target.value)}
            ></Input> */}
          </FormControl>
          <Button
            disabled={!project}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addProject}
            className="addProject__button"
            style={{
              background: 'white',
              color: 'black'
            }}
          >
            Add project
          </Button>
        </form>
      </div>
    );
}

export default AddProject
