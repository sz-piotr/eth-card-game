import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Page from '../../components/Page'
import Card from '../../components/cards/Card'
import {
  cardDetailsFetchRequested,
  cardOwnerFetchRequested
} from '../../../state/actions'

class CardDetails extends React.Component {
  componentDidMount () {
    this.componentDidUpdate()
  }

  componentDidUpdate (prevProps) {
    const id = this.props.match.params.id
    if (!this.props.details.data && !this.props.details.isFetching) {
      this.props.cardDetailsFetchRequested(id)
    }
    if (!prevProps || prevProps.match.params.id !== id) {
      this.props.cardOwnerFetchRequested(id)
    }
  }

  render () {
    const id = this.props.match.params.id
    const { details, owner } = this.props

    const ownerAddress = this.props.offer.seller || this.props.owner.owner
    const isLoading = details.isFetching || owner.isFetching

    console.log(this.props.offer, this.props.owner, ownerAddress)

    return (
      <Page title='Card Details' showBackButton>
        <div className='card-details'>
          <div className='card-details__card'>
            <Card cardId={id} />
          </div>
          <div className='card-details__info'>
            {isLoading && 'Loading ...'}
            {!isLoading && <div>Owner:
              <Link className='link' to={`/collection/${ownerAddress}`}>
                {ownerAddress}
              </Link>
            </div>}
          </div>
        </div>
      </Page>
    )
  }
}

export default connect(
  (state, props) => {
    const id = props.match.params.id
    return {
      address: state.user.address,
      details: state.cards.details[id] || {},
      owner: state.cards.owners[id] || {},
      offer: state.market.offers[id] || {}
    }
  },
  { cardDetailsFetchRequested, cardOwnerFetchRequested }
)(CardDetails)
