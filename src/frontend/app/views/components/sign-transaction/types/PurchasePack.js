import React from 'react'
import { connect } from 'react-redux'

import { weiToEth } from '../../../../contracts'

const PurchasePack = ({ price }) =>
  <React.Fragment>
    <p>Actions to be performed:</p>
    <ul>
      <li>Pay {weiToEth(price)} ETH</li>
      <li>Receive 3 random cards</li>
    </ul>
  </React.Fragment>

export default connect(
  state => ({ price: state.packPrice.data })
)(PurchasePack)
