import React, { useState, useEffect } from 'react';
import './css/App.css'
import { db } from "./firebase";
import Header from './Header';
import AddProject from './AddProject';
import Project from './Project';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './css/ColorPicker.css'

const useStyles = makeStyles((theme) => ({
  App:{
    position: 'relative',
    color: 'white',
    minHeight: '100vh',
    top: '0px',
    padding: '50px 5%  50px 5%'
  }
}));

function App() {
  const [projects, setProjects] = useState([]);
  const [color, setColor] = useState('#D7263D');
  const classes = useStyles();
  useEffect(() => {
    db.collection("projects")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({ id: doc.id, project: doc.data().project }))
        );
      });
  }, [projects]);

  return (
    <div className={classes.App} style={{ backgroundColor: color}}>
      {/* Header  with greeting */}
      <Header />
      {/* Color picker */}
      {/* <ColorPicker/> */}
      <div className="colorPicker__container">
        <Button className="colorPicker__Button button1" disabled={false} onClick={() => setColor('#D7263D')}></Button>
        <Button className="colorPicker__Button button2" disabled={false} onClick={() => setColor('#F46036')}></Button>
        <Button className="colorPicker__Button button3" disabled={false} onClick={() => setColor('#009FB7')}></Button>
        <Button className="colorPicker__Button button4" disabled={false} onClick={() => setColor('#4392F1')}></Button>
        <Button className="colorPicker__Button button5" disabled={false} onClick={() => setColor('#129490')}></Button>
      </div>
      {/* Button to add new project */}
      <AddProject />
      {/* List of projects */}
      {projects.map((project) => (
        <Project key={project.id} projectTitle={project.project} projectID={project.id} color={color}/>
      ))}
    </div>
  );
}

export default App;
