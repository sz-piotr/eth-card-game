import React from 'react'
import { connect } from 'react-redux'

import { weiToEth } from '../../../../contracts'
import { getCardAttributes } from '../../../../data'

const PurchaseCard = ({ details, offer }) => {
  const attributes = getCardAttributes(details.data)
  return (
    <React.Fragment>
      <p>Actions to be performed:</p>
      <ul>
        <li>Pay {weiToEth(offer.price)} ETH</li>
        <li>Receive {attributes.displayName}</li>
      </ul>
    </React.Fragment>
  )
}

export default connect(
  state => ({
    details: state.cards.details[state.market.cardToPurchase],
    offer: state.market.offers[state.market.cardToPurchase]
  })
)(PurchaseCard)
