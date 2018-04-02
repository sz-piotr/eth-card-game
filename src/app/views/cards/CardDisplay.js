import React from 'react'
import { getCardAttributes } from '../../data'

const CardDisplay = ({ className, data, onClick }) => {
  const attributes = getCardAttributes(data[0])
  return (
    <div className='card-wrapper' >
      <div className={`card-display ${className || ''}`} onClick={onClick}>
        {attributes.image && <img className='card-image' src={attributes.image} />}
        <div className='card-name'>{attributes.displayName}</div>
      </div>
    </div>
  )
}

export default CardDisplay
