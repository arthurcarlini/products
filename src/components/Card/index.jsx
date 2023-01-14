import './Card.css'

const Card = ({ id, name, date, days, edit, deleteProd }) => {
  return (
    <div id='card'>
      <p>{id}</p>
      <strong>{name}</strong>
      <small>{date}</small>
      <small>{days}</small>
      <button onClick={edit}>Editar</button>
      <button onClick={deleteProd}>Deletar</button>
    </div>
  )
}

export default Card