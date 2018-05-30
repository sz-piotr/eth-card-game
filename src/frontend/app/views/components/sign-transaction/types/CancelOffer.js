import React from 'react'
import { connect } from 'react-redux'

import TransactionInfo from '../TransactionInfo'
import { weiToEth } from '../../../../contracts'
import { getCardAttributes } from '../../../../data'

const CancelOffer = ({ details, offer }) => {
  const attributes = getCardAttributes(details.data)
  return (
    <TransactionInfo title='Cancel market offer'>
      <p>
        You are about to cancel the market offer of your
        card: <strong>{attributes.displayName}</strong>.
        The price was: <strong>{weiToEth(offer.price)} ETH</strong>.
      </p>
      <p>
        Someone might still buy the card if their transaction
        is mined first.
      </p>
    </TransactionInfo>
  )
}

export default connect(
  state => ({
    details: state.cards.details[state.market.offerToCancel],
    offer: state.market.offers[state.market.offerToCancel]
  })
)(CancelOffer)
