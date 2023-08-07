import { useState } from 'react'
import './Form.css'

function Form(props){
  const [name, setName] = useState("");
  const [stance, setStance] = useState("regular");
  const [obstacle, setObstacle] = useState("flat ground");
  const [tutorial, setTutorial] = useState("");
  
  function submitTricks(event) {
    event.preventDefault()
    const newTrick = {
        id: Date.now(),
        name,
        stance,
        obstacle,
        tutorial
    }
    props.addTrick(newTrick)
    clearInput()
  }
  function clearInput(){
    setName("")
    // setStance("")
    // setObstacle("")
    setTutorial("")
  }

   return (
    <form>
      <h2>Enter trick name, stance, obstacle, and tutorial url.</h2>
      <input
      type='text'
      placeholder='trick name'
      className='name'
      value={name}
      onChange={event => setName(event.target.value)}
      />

    <label> Select Stance:
      <select className='default-label' onChange={event => setStance(event.target.value)}>
        <option value='regular'>Regular</option>
        <option value='switch'>Switch</option>
      </select>
    </label>

    <label> Select Obstacle:
      <select className='default-label' onChange={event => setObstacle(event.target.value)}>
        <option value='flatground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
        <option value='pool'>Ledge</option>
      </select>
    </label>

    <input
      type='text'
      placeholder='tutorial'
      className='tutorial'
      value={tutorial}
      onChange={event => setTutorial(event.target.value)}
      />

      <button className="add-trick-button" onClick = {event => submitTricks(event)}>SEND IT</button>
    </form>
   )
}

export default Form