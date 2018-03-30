import React from 'react'
import cardAttributes from '../../data/cardAttributes'

const CardDisplay = ({ className, data, onClick }) => {
  const attributes = cardAttributes[data[0]] || cardAttributes.default
  return (
    <div className='card-wrapper' >
      <div className={className} onClick={onClick}>
        {attributes.name}
      </div>
    </div>
  )
}

export default CardDisplay
