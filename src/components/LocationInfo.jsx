import React from 'react'

const LocationInfo = ({location}) => {

  return (
    <article className='card_header'>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Tipo: {location?.type}</span></li>
            <li><span>Dimensión: {location?.dimension}</span></li>
            <li><span>Población: {location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo