import React from 'react'

const CardPlaceholder = ({ onClick }) =>
  <div className='card-wrapper'>
    <div className='card-placeholder' onClick={onClick} />
  </div>

export default CardPlaceholder
