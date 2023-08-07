import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import {fetchTricks, postTrick } from '../../APICalls';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';

function App() {
//  const [apiTricks, setApiTricks] = useState([])
//  const [localTricks, setLocalTricks] = useState([])
 const [allTricks, setAllTricks] = useState([])
 
 function addTrick(newTrick) {
  postTrick(newTrick)
  // fetchTricks()
  // setAllTricks([...allTricks, newTrick])
  // setLocalTricks([...apiTricks, ...localTricks, newTrick])
 }
 
//  {reload && <Navigate to='/' />}
//  localStorage.setItem('skateData', JSON.stringify(allTricks))
//  const storedData = localStorage.getItem('skateData')
//  const parsedData = JSON.parse(storedData)
//  useEffect(() => {
//  setAllTricks(parsedData)
// }, []);

//  setAllTricks(parsedData)

 

 useEffect(() => {
    fetchTricks()
    .then(data=>
      setAllTricks(data)
      )
  }, [allTricks]);



  
  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks allTricks={allTricks}/>
    </div>
  );
}

export default App; 
