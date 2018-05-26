import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CardInfoPlaceholder from './CardInfoPlaceholder'
import OfferBuyButton from './OfferBuyButton'
import OfferSellButton from './OfferSellButton'
import OfferCancelButton from './OfferCancelButton'
import { cardOwnerFetchRequested } from '../../../state/actions'
import { getCardAttributes } from '../../../data'

class CardInfo extends React.Component {
  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate (prevProps) {
    const cardId = this.props.cardId
    if (!prevProps || prevProps.cardId !== cardId) {
      this.props.cardOwnerFetchRequested(cardId)
    }
  }

  render () {
    const { account, details, owner, offer, cardId } = this.props

    if (!offer.canPurchase && (!details.data || !owner.owner)) {
      return <CardInfoPlaceholder />
    }

    const ownerAddress = offer.canPurchase
      ? offer.seller
      : owner.owner
    const isYours = ownerAddress === account

    const attributes = getCardAttributes(details.data)

    return (
      <div className='card-details__info'>
        <div>{'Owner: '}
          <Link className='link' to={`/collection/${ownerAddress}`}>
            {ownerAddress}
          </Link>
        </div>
        {isYours && <div>It is yours!</div>}

        <p>{attributes.description}</p>

        {isYours && offer.canPurchase && <OfferCancelButton cardId={cardId} />}
        {isYours && !offer.canPurchase && <OfferSellButton cardId={cardId} />}
        {!isYours && offer.canPurchase && <OfferBuyButton cardId={cardId} />}
      </div>

    )
  }
}

export default connect(
  (state, props) => {
    const id = props.cardId
    return {
      account: state.user.account,
      details: state.cards.details[id] || {},
      owner: state.cards.owners[id] || {},
      offer: state.market.offers[id] || {}
    }
  },
  { cardOwnerFetchRequested }
)(CardInfo)
