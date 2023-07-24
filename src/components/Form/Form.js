import { useState } from 'react'
import './Form.css'

function Form(props){
  const [name, setName] = useState("");
  const [stance, setStance] = useState("");
  const [obstacle, setObstacle] = useState("");
  
  function submitTricks(event) {
    event.preventDefault()
    const newTrick = {
        id: Date.now(),
        name,
        stance,
        obstacle
    }
    props.addTrick(newTrick)
    clearInput()
  }
  function clearInput(){
    setName("")
    setStance("")
    setObstacle("")
  }

   return (
    <form>
      <h2>Enter trick name, stance, and obstacle</h2>
      <input
      type='text'
      placeholder='trick name'
      name='name'
      value={name}
      onChange={event => setName(event.target.value)}
      />

    <input
      type='text'
      placeholder='stance: regular or switch'
      name='stance'
      value={stance}
      onChange={event => setStance(event.target.value)}
      />

    <input
      type='text'
      placeholder='Flatground, Ledge, Rail, Stairs, or Pool'
      name='obstacle'
      value={obstacle}
      onChange={event => setObstacle(event.target.value)}
      />

      <button onClick = {event => submitTricks(event)}>SEND IT</button>
    </form>
   )
}

export default Form