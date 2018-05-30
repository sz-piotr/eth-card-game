import React from 'react'
import { connect } from 'react-redux'

import TransactionInfo from '../TransactionInfo'
import { getCardAttributes } from '../../../../data'
import { offerPriceChanged } from '../../../../state/actions'

class CreateOffer extends React.Component {
  onChange (value) {
    if (!value || value.match(/^\d+(\.\d{0,4})?$/)) {
      this.props.offerPriceChanged(value)
    }
  }

  render () {
    const { details, price } = this.props
    const attributes = getCardAttributes(details.data)
    return (
      <TransactionInfo title='Create market offer' confirmDisabled={!price}>
        <p>
          You are about to create a market offer of your
          card: <strong>{attributes.displayName}</strong>.
        </p>
        <div className='input-group'>
          <label>Price</label>
          <input
            className='input input--inline input--right'
            type='text'
            value={price}
            onChange={e => this.onChange(e.target.value)}
            placeholder='e.g. 0.004'
          />
          ETH
        </div>
      </TransactionInfo>
    )
  }
}

export default connect(
  state => ({
    details: state.cards.details[state.market.offerToCreate.cardId],
    price: state.market.offerToCreate.price
  }),
  { offerPriceChanged }
)(CreateOffer)
