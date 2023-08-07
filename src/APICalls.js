function fetchTricks() {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(res=>res.json())
}

function postTrick(trick){
  console.log(trick)
  return fetch('http://localhost:3001/api/v1/tricks', {
    method:"POST",
    body: JSON.stringify({
      stance: trick.stance,
      name: trick.name,
      obstacle: trick.obstacle,
      tutorial: trick.tutorial,
      id: trick.id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res=>res.json())
  .then(data => console.log(data))
}

function deleteTrick(id){
  return fetch('http://localhost:3001/api/v1/tricks/' + id,{
    method:"DELETE"
  })
  .then(res=>res.json())
  .then(data => console.log(data))
}

export { fetchTricks, postTrick, deleteTrick }