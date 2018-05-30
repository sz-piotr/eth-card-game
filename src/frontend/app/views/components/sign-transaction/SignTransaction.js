import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { signTransactionClosed } from '../../../state/actions'

import PurchasePack from './types/PurchasePack'
import PurchaseCard from './types/PurchaseCard'
import CancelOffer from './types/CancelOffer'

const typeToComponent = {
  'purchase-pack': PurchasePack,
  'purchase-card': PurchaseCard,
  'cancel-offer': CancelOffer
}

const SignTransaction = ({ open, type, signTransactionClosed }) => {
  const Body = typeToComponent[type]
  return (
    <React.Fragment>
      <aside className={classnames('sign-transaction', open && 'sign-transaction--open')}>
        <button className='close' onClick={() => signTransactionClosed()}>&times;</button>
        {Body && <Body />}
      </aside>
      <div className='sign-transaction__shadow' onClick={() => signTransactionClosed()} />
    </React.Fragment>
  )
}

export default connect(
  state => state.signTransaction,
  { signTransactionClosed }
)(SignTransaction)
