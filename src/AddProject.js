import React, { useState } from 'react';
import { db } from "./firebase";
import firebase from "firebase";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './css/AddProject.css'

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
            <InputLabel>Enter project</InputLabel>
            <Input
                value={project}
                onChange={event => setProject(event.target.value)}
            ></Input>
          </FormControl>
          <Button
            disabled={!project}
            type="submit"
            variant="contained"
            color="primary"
            onClick={addProject}
            className="addProject__button"
          >
            Add project
          </Button>
        </form>
      </div>
    );
}

export default AddProject
