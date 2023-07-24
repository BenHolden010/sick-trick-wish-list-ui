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
      <input
      type='text'
      placeholder='trick name'
      name='name'
      value={name}
      onChange={event => setName(event.target.value)}
      />

    <input
      type='text'
      placeholder='stance'
      name='stance'
      value={stance}
      onChange={event => setStance(event.target.value)}
      />

    <input
      type='text'
      placeholder='obstacle'
      name='obstacle'
      value={obstacle}
      onChange={event => setObstacle(event.target.value)}
      />

      <button onClick = {event => submitTricks(event)}>SEND IT</button>
    </form>
   )
}

export default Form