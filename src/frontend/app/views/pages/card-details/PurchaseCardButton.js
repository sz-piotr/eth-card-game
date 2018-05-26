import React from 'react'
import { connect } from 'react-redux'

import { weiToEth } from '../../../contracts'
import { purchaseCardClicked } from '../../../state/actions'

const PurchaseCardButton = ({ cardId, price, purchaseCardClicked }) =>
  <button
    className='button button--wide'
    onClick={() => purchaseCardClicked(cardId)}
  >
    Buy ({weiToEth(price)} ETH)
  </button>

export default connect(
  (state, props) => ({
    price: (state.market.offers[props.cardId] || {}).price
  }),
  { purchaseCardClicked }
)(PurchaseCardButton)
