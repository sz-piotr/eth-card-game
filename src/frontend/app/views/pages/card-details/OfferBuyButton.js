import React from 'react'
import { connect } from 'react-redux'

import { weiToEth } from '../../../contracts'

const OfferBuyButton = ({ cardId, price }) =>
  <button
    className='button button--wide'
    onClick={() => window.alert('Buying ' + cardId)}
  >
    Buy ({weiToEth(price)} ETH)
  </button>

export default connect(
  (state, props) => ({
    price: (state.market.offers[props.cardId] || {}).price
  })
)(OfferBuyButton)
