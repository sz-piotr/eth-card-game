import React from 'react'

const CardDisplay = ({ className, data, onClick }) =>
  <div className='card-wrapper' >
    <div className={className} onClick={onClick}>{JSON.stringify(data)} </div>
  </div>

export default CardDisplay
