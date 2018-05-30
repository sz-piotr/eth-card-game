import React from 'react'
import { connect } from 'react-redux'

import TransactionInfo from '../TransactionInfo'
import { weiToEth } from '../../../../contracts'
import { getCardAttributes } from '../../../../data'

const PurchaseCard = ({ details, offer }) => {
  const attributes = getCardAttributes(details.data)
  return (
    <TransactionInfo title='Market purchase'>
      <p>
        You are about to buy a card from the market. The card
        is <strong>{attributes.displayName}</strong> and
        costs <strong>{weiToEth(offer.price)} ETH</strong>.
      </p>
      <p>
        Someone else might still buy the card if their transaction
        is mined first.
      </p>
    </TransactionInfo>
  )
}

export default connect(
  state => ({
    details: state.cards.details[state.market.cardToPurchase],
    offer: state.market.offers[state.market.cardToPurchase]
  })
)(PurchaseCard)
