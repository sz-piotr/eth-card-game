import React from 'react'

const CardDisplay = (props) =>
  <div className='card-wrapper'>
    <div className='card-display'>{JSON.stringify(props)}</div>
  </div>

export default CardDisplay
