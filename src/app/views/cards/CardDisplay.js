import React from 'react'

const CardDisplay = ({ cardClass, data, onClick }) =>
  <div className='card-wrapper' >
    <div className={cardClass} onClick={onClick}>{JSON.stringify(data)} </div>
  </div>

export default CardDisplay
