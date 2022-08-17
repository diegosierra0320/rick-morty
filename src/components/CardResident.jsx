import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

  const resident = useFetch(url)

  return (
    <article className='card'>
      <header className='card_resident'>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='card_info'>
          <h2>{resident?.name}</h2>
          <h3>{resident?.status}</h3>
          <ul>
            <li>Species<span><br />{resident?.species}</span></li>
            <li>Origin<span><br />{resident?.origin.name}</span></li>
            <li>Eppisodes where appear<span><br />{resident?.episode.length}</span></li>
          </ul>
      </div>
      </header>
    </article>
  )
}

export default CardResident