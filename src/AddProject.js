import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import './css/AddProject.css'

function AddProject() {
    return (
      <div>
        <form className="addProject__form">
          <FormControl className="addProject__formControl">
            <InputLabel>Enter project</InputLabel>
            <Input></Input>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="addProject__button"
          >
            Add project
          </Button>
        </form>
      </div>
    );
}

export default AddProject
