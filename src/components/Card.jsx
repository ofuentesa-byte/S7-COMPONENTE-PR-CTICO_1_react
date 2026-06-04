import { useState } from 'react'

function Card({ imagen, titulo, descripcion, extra }) {

  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="card">

      <img src={imagen} alt={titulo} />

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      {mostrar && (
        <p className="extra">
          {extra}
        </p>
      )}

      <button
        onClick={() => setMostrar(!mostrar)}
      >
        {mostrar ? 'Ocultar' : 'Ver más'}
      </button>

    </div>
  )
}

export default Card