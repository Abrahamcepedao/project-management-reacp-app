import React from 'react';
import './css/App.css'
import Header from './Header';
import AddProject from './AddProject';

function App() {
  return (
    <div className="App">
      {/* Header  with greeting */}
      <Header />
      {/* Button to add new project */}
      <AddProject/>
      {/* List of projects */}
    </div>
  );
}

export default App;
