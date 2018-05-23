import React from 'react'
import { connect } from 'react-redux'

import Page from '../../components/Page'
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
      <Page title='Shop'>
        <img className='shop-booster' src='/images/placeholders/booster-pack.png' /><br />
        <button
          className='button'
          disabled={!canTransact}
          onClick={() => purchasePackClicked()}
        >
          Buy
        </button>
      </Page>
    )
  }
}

export default connect(
  state => ({ canTransact: state.user.canTransact }),
  { packPriceFetchRequested, purchasePackClicked }
)(Shop)
