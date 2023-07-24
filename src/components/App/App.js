import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import getAllTricks from '../../fetchTricks';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';

function App() {
 const [allTricks, setAllTricks] = useState([])
 
 function addTrick(newTrick) {
  setAllTricks([...allTricks, newTrick])
 }

 useEffect(() => {
  // setAllTricks(getAllTricks())
    

    getAllTricks()
    .then(data=>setAllTricks(data))
    
    // console.log(allTricks)
  }, []);
  
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks allTricks={allTricks}/>
    </div>
  );
}

export default App; 
