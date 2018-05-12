import React from 'react'
import { connect } from 'react-redux'
import { getCardAttributes } from '../../../data'

const MarketItem = ({ details, seller, price }) => {
  const attributes = getCardAttributes(details.data)
  return (
    <li className='market-item'>
      <img className='market-item-image' src='images/placeholders/square.svg' />
      <div className='market-item-name'>
        {attributes.displayName}
      </div>
      <a href='#' className='market-item-seller'>
        {seller}
      </a>
      <div className='market-item-price'>
        <span className='market-item-value'>{price}</span>
        <span className='market-item-currency'>ETH</span>
      </div>
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
