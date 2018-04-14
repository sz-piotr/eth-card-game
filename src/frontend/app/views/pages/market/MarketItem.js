import React from 'react'

const MarketItem = () =>
  <li className='market-item'>
    <img className='market-item-image' src='images/placeholders/square.svg' />
    <div className='market-item-name'>
      Annual Exterminator (Foil)
    </div>
    <a href='#' className='market-item-seller'>
      0x125dfe12cA782Ee4
    </a>
    <div className='market-item-price'>
      <span className='market-item-value'>0.004</span>
      <span className='market-item-currency'>ETH</span>
    </div>
  </li>

export default MarketItem
