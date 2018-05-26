import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import SignTransactionHeader from './SignTransactionHeader'
import SignTransactionFooter from './SignTransactionFooter'
import {
  signTransactionClosed,
  signTransactionConfirmed
} from '../../../state/actions'

import PurchasePack from './types/PurchasePack'
import PurchaseCard from './types/PurchaseCard'

const typeToComponent = {
  'purchase-pack': PurchasePack,
  'purchase-card': PurchaseCard
}

const SignTransaction = ({ open, type, signTransactionClosed, signTransactionConfirmed }) => {
  const Body = typeToComponent[type]
  return (
    <React.Fragment>
      <aside className={classnames('sign-transaction', open && 'sign-transaction--open')}>
        <SignTransactionHeader onClose={signTransactionClosed} />
        {Body && <Body />}
        <SignTransactionFooter onConfirm={signTransactionConfirmed} />
      </aside>
      <div className='sign-transaction__shadow' onClick={() => signTransactionClosed()} />
    </React.Fragment>
  )
}

export default connect(
  state => state.signTransaction,
  { signTransactionClosed, signTransactionConfirmed }
)(SignTransaction)
