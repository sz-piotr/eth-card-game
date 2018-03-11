import React from 'react'
import { connect } from 'react-redux'

import { purchasePackTransaction } from '../../state/actions'

const Shop = ({ purchasePackTransaction }) =>
  <section className='container'>
    <h1>Shop</h1>
    <img className='shop-booster' src='/images/placeholders/booster-pack.png' /><br />
    <button onClick={() => purchasePackTransaction()}>Buy</button>
  </section>

export default connect(
  null,
  { purchasePackTransaction }
)(Shop)
