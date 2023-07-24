import './Card.css'

function Card({ name, stance, obstacle, id }){
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{stance}</p>
      <p>{obstacle}</p>
      <button>🗑</button>
    </div>
  )
}

export default Card