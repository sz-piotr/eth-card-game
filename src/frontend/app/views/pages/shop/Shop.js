import React from 'react'
import { connect } from 'react-redux'

import {
  packPriceFetchRequested,
  purchasePackClicked
} from '../../../state/actions'

class Shop extends React.Component {
  componentDidMount () {
    this.props.packPriceFetchRequested()
  }

  render () {
    const { canTransact, purchasePackClicked } = this.props
    return (
      <section className='container'>
        <h1>Shop</h1>
        <img className='shop-booster' src='/images/placeholders/booster-pack.png' /><br />
        <button
          disabled={!canTransact}
          onClick={() => purchasePackClicked()}
        >
          Buy
        </button>
      </section>
    )
  }
}

export default connect(
  state => ({ canTransact: state.user.canTransact }),
  { packPriceFetchRequested, purchasePackClicked }
)(Shop)
