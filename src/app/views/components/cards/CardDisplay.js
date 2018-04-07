import React from 'react'
import classnames from 'classnames'
import { getCardAttributes } from '../../../data'

const CardDisplay = ({ className, data, onClick }) => {
  const attributes = getCardAttributes(data)
  return (
    <div className='card-wrapper' >
      <div className={classnames('card-display', className)} onClick={onClick}>
        {attributes.image && <img className='card-image' src={attributes.image} />}
        <div className='card-name'>{attributes.displayName}</div>
      </div>
    </div>
  )
}

export default CardDisplay
