import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import Difficulty from './Difficulty';
import GameBoard  from './GameBoard';
import Menu from "./Menu"


function App() {
  // Return the App component.
  return (
    <div className="App">
      <Menu/>
      <Difficulty />
    </div>
  );
}

export default App;
