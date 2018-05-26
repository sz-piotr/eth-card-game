import React from 'react'
import { connect } from 'react-redux'

const PurchasePack = ({ price }) =>
  <React.Fragment>
    <p>Actions to be performed:</p>
    <ul>
      <li>Pay {price}</li>
      <li>Receive 3 random cards</li>
    </ul>
  </React.Fragment>

export default connect(
  state => ({ price: state.packPrice.data })
)(PurchasePack)
