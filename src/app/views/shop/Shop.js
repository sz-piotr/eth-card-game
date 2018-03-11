import React from 'react'
import { connect } from 'react-redux'

import {
  fetchPackPriceRequest,
  purchasePackTransaction
} from '../../state/actions'

class Shop extends React.Component {
  componentDidMount () {
    this.props.fetchPackPriceRequest()
  }

  render () {
    const { canTransact, purchasePackTransaction } = this.props
    return (
      <section className='container'>
        <h1>Shop</h1>
        <img className='shop-booster' src='/images/placeholders/booster-pack.png' /><br />
        <button
          disabled={!canTransact}
          onClick={() => purchasePackTransaction()}
        >
          Buy
        </button>
      </section>
    )
  }
}

export default connect(
  state => ({ canTransact: state.user.canTransact }),
  { fetchPackPriceRequest, purchasePackTransaction }
)(Shop)
