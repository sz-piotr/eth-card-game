import React from 'react'

const CardDisplay = ({cardClass, data}) =>
  <div className='card-wrapper'>
    <div className={cardClass}>{JSON.stringify(data)}</div>
  </div>

export default CardDisplay
