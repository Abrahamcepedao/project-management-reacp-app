import React, { useState, useEffect } from 'react';
import './css/App.css'
import { db } from "./firebase";
import Header from './Header';
import AddProject from './AddProject';
import Project from './Project';

function App() {
  const [projects, setProjects] = useState([]);

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
    <div className="App">
      {/* Header  with greeting */}
      <Header />
      {/* Button to add new project */}
      <AddProject />
      {/* List of projects */}
      {projects.map((project) => (
        <Project key={project.id} projectTitle={project.project}/>
      ))};
    </div>
  );
}

export default App;
