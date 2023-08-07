import './Card.css'
import { deleteTrick } from '../../APICalls'

function Card({ name, stance, obstacle, tutorial, id }){
  return (
    <div className='card' id={id}>
      <h3>{name}</h3>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <p>{tutorial}</p>
      <button onClick={()=> deleteTrick(id)}>🗑</button>
    </div>
  )
}

export default Card