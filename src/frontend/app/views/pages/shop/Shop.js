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
      <main className='page'>
        <header className='header'>
          <h1 className='header__title'>Shop</h1>
        </header>
        <img className='shop-booster' src='/images/placeholders/booster-pack.png' /><br />
        <button
          className='button'
          disabled={!canTransact}
          onClick={() => purchasePackClicked()}
        >
          Buy
        </button>
      </main>
    )
  }
}

export default connect(
  state => ({ canTransact: state.user.canTransact }),
  { packPriceFetchRequested, purchasePackClicked }
)(Shop)
