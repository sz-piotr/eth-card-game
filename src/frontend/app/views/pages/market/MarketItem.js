import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCardAttributes } from '../../../data'
import { weiToEth } from '../../../contracts'

const MarketItem = ({ cardId, details, seller, price }) => {
  const attributes = getCardAttributes(details.data)
  return (
    <li className='market-item'>
      <Link to={`/collection/card/${cardId}`}>
        <img className='market-item-image' src='images/placeholders/square.svg' />
        <div className='market-item-name'>
          {attributes.displayName}
        </div>
        <div className='market-item-seller'>{seller}</div>
        <div className='market-item-price'>
          <span className='market-item-value'>{weiToEth(price)}</span>
          <span className='market-item-currency'>ETH</span>
        </div>
      </Link>
    </li>
  )
}

export default connect(
  (state, props) => ({
    details: state.cards.details[props.cardId] || {},
    seller: state.market.offers[props.cardId].seller,
    price: state.market.offers[props.cardId].price
  })
)(MarketItem)
