import React from 'react'
import { getCardAttributes } from '../../data'

const CardDisplay = ({ className, data, onClick }) => {
  const attributes = getCardAttributes(data[0])
  return (
    <div className='card-wrapper' >
      <div className={className} onClick={onClick}>
        {attributes.displayName}
      </div>
    </div>
  )
}

export default CardDisplay
