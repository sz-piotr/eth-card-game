import React from 'react'
import { connect } from 'react-redux'

import TransactionInfo from '../TransactionInfo'
import { weiToEth } from '../../../../contracts'

const PurchasePack = ({ price }) =>
  <TransactionInfo title='Pack purchase'>
    <p>
      You area about to purchase a pack of cards
      for <strong>{weiToEth(price)} ETH</strong>.
    </p>
    <p>
      You will receive 3 random cards.
    </p>
  </TransactionInfo>

export default connect(
  state => ({ price: state.packPrice.data })
)(PurchasePack)
